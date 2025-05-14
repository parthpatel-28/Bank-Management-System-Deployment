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
  branches: any[]= [];
  statusName: any =1;
  status : any[]= [];
  accountData : any[]= [];
  accountTypeList : any[]= [];
  accountType : any = 1;
  display: boolean = false;
  deleteDisplay : boolean = false;
  account: any = {};
  accountDataMain : any[]= [];
  bool : any[]= [];
  cardAlloted : boolean = false; 
  newAccount = false;
  
  formaccount : any;
  Mainformaccount : any;
  selectedAccountID : any;
  deletionAccountID : any;
  formstatus : any[]= []
  formbranches: any[]= [];
  formAccountTypeList : any[]= [];

  constructor(
    private DataService : DataService,
  ) {   
       
      }


  
  ngOnInit(): void {
    this.getData();
  }

 getData(){
  //Branches 
  this.branches = this.DataService.global.branches;
  //Account data
  this.accountData = this.DataService.accounts.accountData;
  this.accountDataMain = this.accountData;
  this.accountTypeList = this.DataService.accounts.accountTypeList;
  this.status = this.DataService.accounts.status;

  //Form Data
  this.bool = this.DataService.global.bool;
  this.formaccount = this.DataService.accounts.form.formaccount;
  this.Mainformaccount = this.formaccount;
  this.formAccountTypeList = this.DataService.accounts.form.accountTypeList;
  this.formstatus = this.DataService.accounts.form.status;
  this.formbranches = this.DataService.accounts.form.branches;
  console.log("loaded");
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
    const flattenedData = this.accountData.map(account => {
      return {
        branch: account.branch,
        customerId: account.customerId,
        accountNumber: account.accountData.accountNumber,
        accountType : account.accountData.accountType,
        balance: account.accountData.balance,
        status: account.accountData.status,
        openingDate : account.accountData.openingDate,
        createdBy : account.accountData.createdBy,
        lastUpdated : account.accountData.lastUpdated,
        // Flattening cardData fields
        cardNumber: account.cardData?.cardNumber || '',
        cardType: account.cardData?.cardType || '',
        // Add more fields from nested objects as needed
      };
    });
  
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(flattenedData);
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
  
  delete(){
  this.DataService.deleteAccount(this.deletionAccountID);
  this.getData();
  this.deletionAccountID = null;
  this.deleteDisplay = false;
  }

  deleteBox(value:any){
    this.deleteDisplay= true;
    this.deletionAccountID = value;
  }

  displayDialog(Id: string) {
    this.selectedAccountID = null;
    this.newAccount = false;
    this.display = true;
    const form = this.accountData.filter((account) => account.customerId === Id);
    this.formaccount = form[0];
    this.selectedAccountID = this.accountData.find((account) => account.customerId === Id );
  }


  displayDialog2(){
    this.newAccount = true;
    this.formaccount =  this.Mainformaccount;
    this.display = true;
  }
  
  saveAccount() {
    if(this.newAccount == false){
      this.formaccount.accountData.openingDate = this.DateConversion(this.formaccount.accountData.openingDate);
      this.DataService.editAccount(this.selectedAccountID , this.formaccount );
      this.getData();
      this.display = false;
      
    }else{
      this.formaccount.accountData.openingDate = this.DateConversion(this.formaccount.accountData.openingDate);
      console.log("added" , this.formaccount);
      this.DataService.AddNewAccount(this.formaccount);
      this.getData();
      console.log(this.accountData);
      this.display = false;


    } 

  }



  getColor(value: any) {
    switch (value) {
    case 'Closed':        // Rejected
      return { color: '#FF4D4F', backgroundColor: '#FFF1F0' };
    case 'Active':       // Approved
      return { color: '#28C76F', backgroundColor: '#F2FBF5' };
    case 'Frozen': // In Review
     return { color: '#E5A800', backgroundColor: '#FFFBE6' };
    default:
      return { color: '#6C757D', backgroundColor: '#F8F9FA' }; // N/A / Unknown
  }
  }

  DateConversion(value: any): string {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formatted = `${year}-${month}-${day}`;
    console.log("after:", formatted);
    return formatted;
  }
  
  
  
  


  
}
