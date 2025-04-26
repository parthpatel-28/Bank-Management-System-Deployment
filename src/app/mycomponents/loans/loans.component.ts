import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  cities: any[];
  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  loanData : any[];
  branches : any[];
  selectedBranch :any;
  status : any[]
  statusName : any;
  dialogFields : any[];
  display: boolean = false;
  account: any = {};
  cards2 = ['card', 'card', 'card', 'card', ]; 
  stats :any[];

  constructor() { 
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.branches = [
      { branchId: 'BR001', branchName: 'Mumbai Main Branch', location: 'Mumbai', region: 'Western' },
      { branchId: 'BR002', branchName: 'Delhi Branch', location: 'Delhi', region: 'Northern' },
      { branchId: 'BR003', branchName: 'Chennai Branch', location: 'Chennai', region: 'Southern' },
      { branchId: 'BR004', branchName: 'Pune Branch', location: 'Pune', region: 'Western' },
      { branchId: 'BR005', branchName: 'Bangalore Branch', location: 'Bangalore', region: 'Southern' },
      { branchId: 'BR006', branchName: 'Hyderabad Branch', location: 'Hyderabad', region: 'Southern' }
    ];

    this.dialogFields = [
      { name: "id" , label: "Customer ID"},
      { name: "openingDate" ,label: "OpeningDate"},
      { name: "accountNo" ,label: "AccountNo"},
      { name: "accountType" ,label: "AccountType" },
      { name: "branch"  ,label: "Branch"},
      { name: "status"  ,label: "Status"},
      { name: "balance" , label: "Balance"}
      ]
  
    this.status =[
      {name: "Approved"},
      {name: "Pending"},
      {name: "Rejected"},

    ]

    this.loanData = [
      {
        loanId: 'LN1001',
        customerId: 'CUST001',
        loanType: 'Home Loan',
        amount: 2500000,
        interestRate: 7.5,
        tenureYears: 20,
        branch: 'Mumbai Main Branch',
        status: 'Approved',
        disbursedDate: '2022-09-01',
        createdBy: 'EMP102',
        lastUpdated: '2025-04-20T11:15:00Z',
        processed: true
      },
      {
        loanId: 'LN1002',
        customerId: 'CUST002',
        loanType: 'Personal Loan',
        amount: 500000,
        interestRate: 11.0,
        tenureYears: 5,
        branch: 'Delhi Branch',
        status: 'Pending',
        disbursedDate: null,
        createdBy: 'EMP103',
        lastUpdated: '2025-04-18T09:00:00Z',
        processed: false
      },
      {
        loanId: 'LN1003',
        customerId: 'CUST003',
        loanType: 'Auto Loan',
        amount: 800000,
        interestRate: 9.2,
        tenureYears: 7,
        branch: 'Chennai Branch',
        status: 'Approved',
        disbursedDate: '2023-06-10',
        createdBy: 'EMP104',
        lastUpdated: '2025-04-15T14:30:00Z',
        processed: true
      },
      {
        loanId: 'LN1004',
        customerId: 'CUST004',
        loanType: 'Business Loan',
        amount: 3500000,
        interestRate: 12.5,
        tenureYears: 10,
        branch: 'Pune Branch',
        status: 'Rejected',
        disbursedDate: null,
        createdBy: 'EMP105',
        lastUpdated: '2025-03-20T13:20:00Z',
        processed: false
      },
      {
        loanId: 'LN1005',
        customerId: 'CUST005',
        loanType: 'Education Loan',
        amount: 600000,
        interestRate: 6.8,
        tenureYears: 8,
        branch: 'Bangalore Branch',
        status: 'Approved',
        disbursedDate: '2024-08-01',
        createdBy: 'EMP106',
        lastUpdated: '2025-04-01T08:10:00Z',
        processed: true
      },
      {
        loanId: 'LN1006',
        customerId: 'CUST006',
        loanType: 'Home Loan',
        amount: 1800000,
        interestRate: 7.1,
        tenureYears: 15,
        branch: 'Hyderabad Branch',
        status: 'Pending',
        disbursedDate: null,
        createdBy: 'EMP107',
        lastUpdated: '2025-04-17T17:45:00Z',
        processed: false
      },

      {
        loanId: 'LN1007',
        customerId: 'CUST007',
        loanType: 'Auto Loan',
        amount: 950000,
        interestRate: 8.9,
        tenureYears: 6,
        branch: 'Mumbai Main Branch',
        status: 'Approved',
        disbursedDate: '2023-02-14',
        createdBy: 'EMP108',
        lastUpdated: '2025-04-20T10:00:00Z',
        processed: true
      },
      {
        loanId: 'LN1008',
        customerId: 'CUST008',
        loanType: 'Education Loan',
        amount: 1100000,
        interestRate: 9.0,
        tenureYears: 7,
        branch: 'Delhi Branch',
        status: 'Pending',
        disbursedDate: null,
        createdBy: 'EMP109',
        lastUpdated: '2025-04-19T12:30:00Z',
        processed: false
      },
      {
        loanId: 'LN1009',
        customerId: 'CUST009',
        loanType: 'Business Loan',
        amount: 4200000,
        interestRate: 11.2,
        tenureYears: 12,
        branch: 'Chennai Branch',
        status: 'Approved',
        disbursedDate: '2023-11-11',
        createdBy: 'EMP110',
        lastUpdated: '2025-04-18T14:45:00Z',
        processed: true
      },
      {
        loanId: 'LN1010',
        customerId: 'CUST010',
        loanType: 'Personal Loan',
        amount: 300000,
        interestRate: 10.5,
        tenureYears: 4,
        branch: 'Pune Branch',
        status: 'Closed',
        disbursedDate: '2021-06-01',
        createdBy: 'EMP111',
        lastUpdated: '2024-12-10T08:20:00Z',
        processed: true
      },
      {
        loanId: 'LN1011',
        customerId: 'CUST011',
        loanType: 'Home Loan',
        amount: 2000000,
        interestRate: 7.0,
        tenureYears: 18,
        branch: 'Hyderabad Branch',
        status: 'Rejected',
        disbursedDate: null,
        createdBy: 'EMP112',
        lastUpdated: '2025-03-15T15:10:00Z',
        processed: false
      },
      {
        loanId: 'LN1012',
        customerId: 'CUST012',
        loanType: 'Education Loan',
        amount: 850000,
        interestRate: 8.3,
        tenureYears: 6,
        branch: 'Bangalore Branch',
        status: 'Approved',
        disbursedDate: '2023-04-04',
        createdBy: 'EMP113',
        lastUpdated: '2025-04-05T11:35:00Z',
        processed: true
      },
      {
        loanId: 'LN1013',
        customerId: 'CUST013',
        loanType: 'Auto Loan',
        amount: 670000,
        interestRate: 9.4,
        tenureYears: 5,
        branch: 'Mumbai Main Branch',
        status: 'Pending',
        disbursedDate: null,
        createdBy: 'EMP114',
        lastUpdated: '2025-04-21T16:50:00Z',
        processed: false
      },
      {
        loanId: 'LN1014',
        customerId: 'CUST014',
        loanType: 'Personal Loan',
        amount: 450000,
        interestRate: 11.7,
        tenureYears: 3,
        branch: 'Delhi Branch',
        status: 'Approved',
        disbursedDate: '2023-01-22',
        createdBy: 'EMP115',
        lastUpdated: '2025-04-10T09:15:00Z',
        processed: true
      },
      {
        loanId: 'LN1015',
        customerId: 'CUST015',
        loanType: 'Business Loan',
        amount: 4800000,
        interestRate: 10.0,
        tenureYears: 14,
        branch: 'Chennai Branch',
        status: 'Pending',
        disbursedDate: null,
        createdBy: 'EMP116',
        lastUpdated: '2025-04-09T13:05:00Z',
        processed: false
      },
      {
        loanId: 'LN1016',
        customerId: 'CUST016',
        loanType: 'Education Loan',
        amount: 950000,
        interestRate: 8.9,
        tenureYears: 7,
        branch: 'Pune Branch',
        status: 'Approved',
        disbursedDate: '2022-12-01',
        createdBy: 'EMP117',
        lastUpdated: '2025-04-06T12:00:00Z',
        processed: true
      },
      {
        loanId: 'LN1017',
        customerId: 'CUST017',
        loanType: 'Auto Loan',
        amount: 770000,
        interestRate: 9.6,
        tenureYears: 5,
        branch: 'Hyderabad Branch',
        status: 'Closed',
        disbursedDate: '2020-07-07',
        createdBy: 'EMP118',
        lastUpdated: '2024-09-20T10:10:00Z',
        processed: true
      },
      {
        loanId: 'LN1018',
        customerId: 'CUST018',
        loanType: 'Personal Loan',
        amount: 520000,
        interestRate: 10.3,
        tenureYears: 4,
        branch: 'Bangalore Branch',
        status: 'Rejected',
        disbursedDate: null,
        createdBy: 'EMP119',
        lastUpdated: '2025-03-30T08:55:00Z',
        processed: false
      },
      {
        loanId: 'LN1019',
        customerId: 'CUST019',
        loanType: 'Business Loan',
        amount: 3800000,
        interestRate: 11.3,
        tenureYears: 16,
        branch: 'Mumbai Main Branch',
        status: 'Approved',
        disbursedDate: '2024-02-20',
        createdBy: 'EMP120',
        lastUpdated: '2025-04-13T11:45:00Z',
        processed: true
      },
      {
        loanId: 'LN1020',
        customerId: 'CUST020',
        loanType: 'Home Loan',
        amount: 2300000,
        interestRate: 7.6,
        tenureYears: 19,
        branch: 'Delhi Branch',
        status: 'Pending',
        disbursedDate: null,
        createdBy: 'EMP121',
        lastUpdated: '2025-04-16T14:00:00Z',
        processed: false
      },
      {
        loanId: 'LN1021',
        customerId: 'CUST021',
        loanType: 'Education Loan',
        amount: 780000,
        interestRate: 9.0,
        tenureYears: 7,
        branch: 'Chennai Branch',
        status: 'Approved',
        disbursedDate: '2023-09-09',
        createdBy: 'EMP122',
        lastUpdated: '2025-04-22T09:30:00Z',
        processed: true
      }
    ];
    
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

   exportToExcel(): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.loanData);
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
