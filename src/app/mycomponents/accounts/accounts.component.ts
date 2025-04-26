import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  selectedBranch: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  branches: any[];
  statusName: any;
  status : any[];
  accountData : any[];
  accountTypeList : any[];
  accountType : any;
  display: boolean = false;
  dialogFields : any[];
  account: any = {};

  constructor() {   

     this.status = [
      {name: "Active"},
      {name: "Closed"},
      {name: "Frozen"},
    ]

    this.accountTypeList = [
      {name: "Savings"},
      {name: "Current"},
      {name: "Fixed Deposit"},
    ]

    this.dialogFields = [
    { name: "id" , label: "Customer ID"},
    { name: "openingDate" ,label: "OpeningDate"},
    { name: "accountNo" ,label: "AccountNo"},
    { name: "accountType" ,label: "AccountType" },
    { name: "branch"  ,label: "Branch"},
    { name: "status"  ,label: "Status"},
    { name: "balance" , label: "Balance"}
    ]


    this.branches = [
      { branchId: 'BR001', branchName: 'Mumbai Main Branch', location: 'Mumbai', region: 'Western' },
      { branchId: 'BR002', branchName: 'Delhi Branch', location: 'Delhi', region: 'Northern' },
      { branchId: 'BR003', branchName: 'Chennai Branch', location: 'Chennai', region: 'Southern' },
      { branchId: 'BR004', branchName: 'Pune Branch', location: 'Pune', region: 'Western' },
      { branchId: 'BR005', branchName: 'Bangalore Branch', location: 'Bangalore', region: 'Southern' },
      { branchId: 'BR006', branchName: 'Hyderabad Branch', location: 'Hyderabad', region: 'Southern' }
    ];
    


     this.accountData = [
      {
        accountNumber: 'BA1234567890',
        customerId: 'CUST001',
        accountType: 'Savings',
        branch: 'Mumbai Main Branch',
        balance: 25000,
        status: 'Active',
        openingDate: '2022-06-15',
        createdBy: 'EMP102',
        lastUpdated: '2025-04-20T10:30:00Z'
      },
      {
        accountNumber: 'BA9876543210',
        customerId: 'CUST002',
        accountType: 'Current',
        branch: 'Delhi Branch',
        balance: 50000,
        status: 'Frozen',
        openingDate: '2023-01-05',
        createdBy: 'EMP103',
        lastUpdated: '2025-03-18T14:25:00Z'
      },
      {
        accountNumber: 'BA1122334455',
        customerId: 'CUST003',
        accountType: 'Fixed Deposit',
        branch: 'Chennai Branch',
        balance: 100000,
        status: 'Active',
        openingDate: '2021-09-10',
        createdBy: 'EMP104',
        lastUpdated: '2025-04-15T09:00:00Z'
      },
      {
        accountNumber: 'BA5566778899',
        customerId: 'CUST004',
        accountType: 'Savings',
        branch: 'Pune Branch',
        balance: 12000,
        status: 'Closed',
        openingDate: '2020-05-25',
        createdBy: 'EMP105',
        lastUpdated: '2023-08-01T11:45:00Z'
      },
      {
        accountNumber: 'BA2233445566',
        customerId: 'CUST005',
        accountType: 'Current',
        branch: 'Bangalore Branch',
        balance: 30000,
        status: 'Active',
        openingDate: '2022-11-30',
        createdBy: 'EMP106',
        lastUpdated: '2025-04-19T08:50:00Z'
      },
      {
        accountNumber: 'BA9988776655',
        customerId: 'CUST006',
        accountType: 'Savings',
        branch: 'Hyderabad Branch',
        balance: 15000,
        status: 'Frozen',
        openingDate: '2023-02-10',
        createdBy: 'EMP107',
        lastUpdated: '2025-04-10T16:10:00Z'
      },

      {
        accountNumber: 'BA1234567890',
        customerId: 'CUST007',
        accountType: 'Savings',
        branch: 'Mumbai Main Branch',
        balance: 25000,
        status: 'Active',
        openingDate: '2022-06-15',
        createdBy: 'EMP102',
        lastUpdated: '2025-04-20T10:30:00Z'
      },
      {
        accountNumber: 'BA9876543210',
        customerId: 'CUST008',
        accountType: 'Current',
        branch: 'Delhi Branch',
        balance: 50000,
        status: 'Frozen',
        openingDate: '2023-01-05',
        createdBy: 'EMP103',
        lastUpdated: '2025-03-18T14:25:00Z'
      },
      {
        accountNumber: 'BA1122334455',
        customerId: 'CUST009',
        accountType: 'Fixed Deposit',
        branch: 'Chennai Branch',
        balance: 100000,
        status: 'Active',
        openingDate: '2021-09-10',
        createdBy: 'EMP104',
        lastUpdated: '2025-04-15T09:00:00Z'
      },
      {
        accountNumber: 'BA5566778899',
        customerId: 'CUST010',
        accountType: 'Savings',
        branch: 'Pune Branch',
        balance: 12000,
        status: 'Closed',
        openingDate: '2020-05-25',
        createdBy: 'EMP105',
        lastUpdated: '2023-08-01T11:45:00Z'
      },
      {
        accountNumber: 'BA2233445566',
        customerId: 'CUST011',
        accountType: 'Current',
        branch: 'Bangalore Branch',
        balance: 30000,
        status: 'Active',
        openingDate: '2022-11-30',
        createdBy: 'EMP106',
        lastUpdated: '2025-04-19T08:50:00Z'
      },
      {
        accountNumber: 'BA9988776655',
        customerId: 'CUST012',
        accountType: 'Savings',
        branch: 'Hyderabad Branch',
        balance: 15000,
        status: 'Frozen',
        openingDate: '2023-02-10',
        createdBy: 'EMP107',
        lastUpdated: '2025-04-10T16:10:00Z'
      },
      {
        accountNumber: 'BA3344556677',
        customerId: 'CUST012',
        accountType: 'Fixed Deposit',
        branch: 'Mumbai Main Branch',
        balance: 150000,
        status: 'Active',
        openingDate: '2020-03-18',
        createdBy: 'EMP108',
        lastUpdated: '2025-03-30T12:15:00Z'
      },
      {
        accountNumber: 'BA4455667788',
        customerId: 'CUST014',
        accountType: 'Current',
        branch: 'Chennai Branch',
        balance: 22000,
        status: 'Closed',
        openingDate: '2021-06-01',
        createdBy: 'EMP109',
        lastUpdated: '2023-02-12T14:40:00Z'
      },
      {
        accountNumber: 'BA5566778890',
        customerId: 'CUST015',
        accountType: 'Savings',
        branch: 'Delhi Branch',
        balance: 30000,
        status: 'Active',
        openingDate: '2022-12-25',
        createdBy: 'EMP110',
        lastUpdated: '2025-04-05T10:00:00Z'
      },
      {
        accountNumber: 'BA6677889900',
        customerId: 'CUST016',
        accountType: 'Fixed Deposit',
        branch: 'Pune Branch',
        balance: 75000,
        status: 'Frozen',
        openingDate: '2020-10-15',
        createdBy: 'EMP111',
        lastUpdated: '2024-12-30T08:20:00Z'
      },
      {
        accountNumber: 'BA7788990011',
        customerId: 'CUST017',
        accountType: 'Savings',
        branch: 'Bangalore Branch',
        balance: 21000,
        status: 'Active',
        openingDate: '2021-07-20',
        createdBy: 'EMP112',
        lastUpdated: '2025-04-08T17:45:00Z'
      },
      {
        accountNumber: 'BA8899001122',
        customerId: 'CUST018',
        accountType: 'Current',
        branch: 'Hyderabad Branch',
        balance: 90000,
        status: 'Active',
        openingDate: '2022-08-13',
        createdBy: 'EMP113',
        lastUpdated: '2025-04-18T09:30:00Z'
      },
      {
        accountNumber: 'BA9900112233',
        customerId: 'CUST019',
        accountType: 'Fixed Deposit',
        branch: 'Mumbai Main Branch',
        balance: 120000,
        status: 'Closed',
        openingDate: '2021-11-05',
        createdBy: 'EMP114',
        lastUpdated: '2023-09-09T10:05:00Z'
      },
      {
        accountNumber: 'BA1234567891',
        customerId: 'CUST020',
        accountType: 'Savings',
        branch: 'Delhi Branch',
        balance: 5000,
        status: 'Frozen',
        openingDate: '2020-12-10',
        createdBy: 'EMP115',
        lastUpdated: '2024-10-10T15:00:00Z'
      }
    ];
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
