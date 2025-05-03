import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {


  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  loanData : any[];
  loanDataMain : any [];
  branches : any[];
  selectedBranch :any = 1;
  status : any[]
  statusName : any =1;
  dialogFields : any[];
  display: boolean = false;
  account: any = {};
  cards2 = ['card', 'card', 'card', 'card', ]; 
  stats :any[];

  constructor(
    private DataService : DataService,
  ) { 
 
    this.branches = DataService.global.branches;
    this.dialogFields = [
      { name: "id" , label: "Customer ID"},
      { name: "openingDate" ,label: "OpeningDate"},
      { name: "accountNo" ,label: "AccountNo"},
      { name: "accountType" ,label: "AccountType" },
      { name: "branch"  ,label: "Branch"},
      { name: "status"  ,label: "Status"},
      { name: "balance" , label: "Balance"}
      ]
  
    this.status = DataService.loans.status;

    this.loanData = DataService.loans.loanData;
    this.loanDataMain = this.loanData;


    const loanStatusCount = this.loanData.reduce((acc, loan) => {
      const status = loan.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
    
    // Transforming into desired structure
    const statusArray = Object.entries(loanStatusCount).map(([status, count]) => ({
      name: status,
      value: count
    }));
    
    console.log(statusArray);
    this.stats = statusArray;
    
    console.log(loanStatusCount);
    

  }
 

  


  
  ngOnInit(): void {
  

  }

  saveAccount() {
    console.log('Account Saved', this.account);
    this.display = false;
  }

  displayDialog(){
    this.display = true;
  }

  Click_Search(value : any){
    this.loanData = this.loanDataMain;
  
    if(this.selectedBranch.branchName != "All" && this.selectedBranch != 1){
      this.loanData  = this.loanData.filter(account => account.branch === this.selectedBranch.branchName);
    }

    if(this.statusName.value != "All" && this.statusName != 1){
      this.loanData  = this.loanData.filter(account => account.status === this.statusName.value);
    }

  }

  Click_Reset(){
    this.loanData = this.loanDataMain;
    this.selectedBranch = 1;
    this.statusName = 1;

  }



  loanFilter(){
      
  }
   exportToExcel(): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.loanData);
      const workbook: XLSX.WorkBook = {
        Sheets: { 'Loans Data': worksheet },
        SheetNames: ['Loans Data']
      };
    
      const excelBuffer: any = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
    
      const data: Blob = new Blob([excelBuffer], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      });
    
      saveAs(data, 'Loans Data.xlsx');
    }
  

  getColor(status: any) {
    switch (status) {
      case "Approved":
        return '#5cb89e'; // Gentle green
      case "Pending":
        return '#dda45a'; // Warm amber
      case "Closed":
        return '#a1a1a1'; // Soft neutral gray
      case "Rejected":
        return '#d46b6b'; // Muted red
      default:
        return '#cccccc'; // Fallback gray
    }
  }
  
  

}
