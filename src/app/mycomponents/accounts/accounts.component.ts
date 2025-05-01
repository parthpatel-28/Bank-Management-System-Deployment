import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  selectedBranch: any = 1;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  branches: any[];
  statusName: any =1;
  status : any[];
  accountData : any[];
  accountTypeList : any[];
  accountType : any = 1;
  display: boolean = false;
  dialogFields : any[];
  account: any = {};
  accountDataMain : any[];

  constructor(
    private DataService : DataService,
  ) {   
        this.branches = DataService.global.branches;
        this.accountData = DataService.accounts.accountData;
        this.accountTypeList = DataService.accounts.accountTypeList;
        this.status = DataService.accounts.status;
        this.dialogFields = DataService.accounts.dialogFields;


        this.accountDataMain = this.accountData;
      }


  
  ngOnInit(): void {

  }
  saveAccount() {
    console.log('Account Saved', this.account);
    this.display = false;
  }

  displayDialog() {
    this.display = true;
  }
  
  Click_Search(value : any){
    this.accountData = this.accountDataMain
  
    if(this.selectedBranch.branchName != "All" && this.selectedBranch != 1){
      this.accountData  = this.accountData.filter(account => account.branch === this.selectedBranch.branchName);
   
    }

    
    if(this.statusName.value != "All" && this.statusName != 1){
      console.log(this.statusName.value);
       this.accountData  = this.accountData.filter(account => account.accountData.status === this.statusName.value);
    }
    
    
    if(this.accountType.value != "All" && this.accountType != 1){
      console.log(this.accountType);
       this.accountData  = this.accountData.filter(account => account.accountData.accountType === this.accountType.value);
    }
  }

  Click_Reset(){
    this.accountData = this.accountDataMain
    this.selectedBranch = 1;
    this.statusName = 1
    this.accountType = 1
  }

  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.accountData);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'Account Data': worksheet },
      SheetNames: ['Account Data']
    };
  
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });
  
    const data: Blob = new Blob([excelBuffer], {
      type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
  
    saveAs(data, 'AccountData.xlsx');
  }

  
  getColor(percentage: any) {
    if (percentage === "Active") {
      return '#5cb89e'; // Gentle green
    } else if (percentage === "Frozen") {
      return '#dda45a'; // Warm orange
    } else {
      return '#d46b6b'; // Muted red
    }
  }
  
  
  


  
}
