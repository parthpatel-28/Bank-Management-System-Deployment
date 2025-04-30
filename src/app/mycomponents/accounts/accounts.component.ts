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
      {name: "Active" ,  value : "Active"},
      {name: "Closed" ,  value : "Closed"},
      {name: "Frozen" ,  value : "Frozen"},
    ]

    this.accountTypeList = [
      {name: "Savings",  value : "Savings"},
      {name: "Current",  value : "Current"},
      {name: "Fixed Deposit",  value : "Fixed Deposit"},
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
    


    this.accountData =[
      {
      customerId: 'CUST001',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA1234567890',
        accountType: 'Savings',
        balance: 25000,
        status: 'Active',
        openingDate: '2022-06-15',
        createdBy: 'EMP102',
        lastUpdated: '2025-04-20T10:30:00Z'
      },
      cardData: {
        cardNumber: '4539 1488 0343 6467',
        validFrom: '2023-01-01',
        validTill: '2028-01-01',
        dateOfIssue: '2023-01-01',
        pin: '1234',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '123',
        cardStatus: 'Active',
        dailyLimit: 50000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST002',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA2234567891',
        accountType: 'Current',
        balance: 150000,
        status: 'Active',
        openingDate: '2021-04-10',
        createdBy: 'EMP104',
        lastUpdated: '2025-04-22T12:45:00Z'
      },
      cardData: {
        cardNumber: '4716 1234 5678 9012',
        validFrom: '2022-05-01',
        validTill: '2027-05-01',
        dateOfIssue: '2022-05-01',
        pin: '5678',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '456',
        cardStatus: 'Active',
        dailyLimit: 100000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST003',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA3234567892',
        accountType: 'Savings',
        balance: 75000,
        status: 'Closed',
        openingDate: '2020-01-20',
        createdBy: 'EMP105',
        lastUpdated: '2025-04-18T08:15:00Z'
      },
      cardData: {
        cardNumber: '6011 1234 5678 9012',
        validFrom: '2021-07-01',
        validTill: '2026-07-01',
        dateOfIssue: '2021-07-01',
        pin: '9876',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '789',
        cardStatus: 'Blocked',
        dailyLimit: 25000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST004',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA4234567893',
        accountType: 'Current',
        balance: 50000,
        status: 'Frozen',
        openingDate: '2019-11-05',
        createdBy: 'EMP106',
        lastUpdated: '2025-04-19T15:00:00Z'
      },
      cardData: {
        cardNumber: '3530 1113 3330 0000',
        validFrom: '2020-10-01',
        validTill: '2025-10-01',
        dateOfIssue: '2020-10-01',
        pin: '1122',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '321',
        cardStatus: 'Expired',
        dailyLimit: 75000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST005',
      branch: 'Hyderabad Branch',
      accountData: {
        accountNumber: 'BA5234567894',
        accountType: 'Savings',
        balance: 42000,
        status: 'Active',
        openingDate: '2022-08-12',
        createdBy: 'EMP107',
        lastUpdated: '2025-04-23T09:00:00Z'
      },
      cardData: {
        cardNumber: '5105 1051 0510 5100',
        validFrom: '2023-03-01',
        validTill: '2028-03-01',
        dateOfIssue: '2023-03-01',
        pin: '3344',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '654',
        cardStatus: 'Active',
        dailyLimit: 60000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST006',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA6234567895',
        accountType: 'Current',
        balance: 90000,
        status: 'Active',
        openingDate: '2021-03-14',
        createdBy: 'EMP108',
        lastUpdated: '2025-04-25T11:30:00Z'
      },
      cardData: {
        cardNumber: '4111 1111 1111 1111',
        validFrom: '2021-06-01',
        validTill: '2026-06-01',
        dateOfIssue: '2021-06-01',
        pin: '7788',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '147',
        cardStatus: 'Active',
        dailyLimit: 80000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST007',
      branch: 'Bangalore Branch',
      accountData: {
        accountNumber: 'BA7234567896',
        accountType: 'Savings',
        balance: 31000,
        status: 'Active',
        openingDate: '2020-09-25',
        createdBy: 'EMP109',
        lastUpdated: '2025-04-21T14:00:00Z'
      },
      cardData: {
        cardNumber: '5500 0000 0000 0004',
        validFrom: '2020-12-01',
        validTill: '2025-12-01',
        dateOfIssue: '2020-12-01',
        pin: '5566',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '963',
        cardStatus: 'Blocked',
        dailyLimit: 30000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST008',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA8234567897',
        accountType: 'Current',
        balance: 112000,
        status: 'Active',
        openingDate: '2019-07-07',
        createdBy: 'EMP110',
        lastUpdated: '2025-04-20T17:20:00Z'
      },
      cardData: {
        cardNumber: '3782 822463 10005',
        validFrom: '2021-08-01',
        validTill: '2026-08-01',
        dateOfIssue: '2021-08-01',
        pin: '8899',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '852',
        cardStatus: 'Active',
        dailyLimit: 120000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST009',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA9234567898',
        accountType: 'Savings',
        balance: 58000,
        status: 'Frozen',
        openingDate: '2021-01-05',
        createdBy: 'EMP111',
        lastUpdated: '2025-04-19T13:10:00Z'
      },
      cardData: {
        cardNumber: '6011 0009 9013 9424',
        validFrom: '2022-02-01',
        validTill: '2027-02-01',
        dateOfIssue: '2022-02-01',
        pin: '6677',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '951',
        cardStatus: 'Active',
        dailyLimit: 40000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST010',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA1023456789',
        accountType: 'Current',
        balance: 135000,
        status: 'Active',
        openingDate: '2020-05-19',
        createdBy: 'EMP112',
        lastUpdated: '2025-04-18T12:00:00Z'
      },
      cardData: {
        cardNumber: '3056 9309 0259 04',
        validFrom: '2020-10-01',
        validTill: '2025-10-01',
        dateOfIssue: '2020-10-01',
        pin: '5566',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '159',
        cardStatus: 'Expired',
        dailyLimit: 50000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST011',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA1123456790',
        accountType: 'Savings',
        balance: 68000,
        status: 'Active',
        openingDate: '2022-11-11',
        createdBy: 'EMP113',
        lastUpdated: '2025-04-23T10:15:00Z'
      },
      cardData: {
        cardNumber: '3530 1113 3330 0000',
        validFrom: '2023-01-01',
        validTill: '2028-01-01',
        dateOfIssue: '2023-01-01',
        pin: '7788',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '789',
        cardStatus: 'Active',
        dailyLimit: 60000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST012',
      branch: 'Bangalore Branch',
      accountData: {
        accountNumber: 'BA1223456791',
        accountType: 'Current',
        balance: 40000,
        status: 'Active',
        openingDate: '2021-02-22',
        createdBy: 'EMP114',
        lastUpdated: '2025-04-24T13:25:00Z'
      },
      cardData: {
        cardNumber: '4000 0566 5566 5556',
        validFrom: '2021-05-01',
        validTill: '2026-05-01',
        dateOfIssue: '2021-05-01',
        pin: '3344',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '357',
        cardStatus: 'Active',
        dailyLimit: 70000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST013',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA1323456792',
        accountType: 'Savings',
        balance: 21000,
        status: 'Active',
        openingDate: '2020-12-31',
        createdBy: 'EMP115',
        lastUpdated: '2025-04-26T08:00:00Z'
      },
      cardData: {
        cardNumber: '6011 6011 6011 6611',
        validFrom: '2021-01-01',
        validTill: '2026-01-01',
        dateOfIssue: '2021-01-01',
        pin: '9988',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '468',
        cardStatus: 'Blocked',
        dailyLimit: 20000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST014',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA1423456793',
        accountType: 'Current',
        balance: 145000,
        status: 'Frozen',
        openingDate: '2018-08-20',
        createdBy: 'EMP116',
        lastUpdated: '2025-04-21T15:30:00Z'
      },
      cardData: {
        cardNumber: '6011 1234 5678 9012',
        validFrom: '2020-03-01',
        validTill: '2025-03-01',
        dateOfIssue: '2020-03-01',
        pin: '4455',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '753',
        cardStatus: 'Active',
        dailyLimit: 95000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST015',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA1523456794',
        accountType: 'Savings',
        balance: 33000,
        status: 'Active',
        openingDate: '2023-01-01',
        createdBy: 'EMP117',
        lastUpdated: '2025-04-22T16:40:00Z'
      },
      cardData: {
        cardNumber: '4000 3333 4444 5555',
        validFrom: '2023-02-01',
        validTill: '2028-02-01',
        dateOfIssue: '2023-02-01',
        pin: '7766',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '654',
        cardStatus: 'Active',
        dailyLimit: 45000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST016',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA1623456795',
        accountType: 'Current',
        balance: 117000,
        status: 'Closed',
        openingDate: '2019-09-15',
        createdBy: 'EMP118',
        lastUpdated: '2025-04-20T09:30:00Z'
      },
      cardData: {
        cardNumber: '5555 6666 7777 8888',
        validFrom: '2020-12-01',
        validTill: '2025-12-01',
        dateOfIssue: '2020-12-01',
        pin: '2233',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '852',
        cardStatus: 'Expired',
        dailyLimit: 60000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST017',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA1723456796',
        accountType: 'Savings',
        balance: 22000,
        status: 'Active',
        openingDate: '2021-04-10',
        createdBy: 'EMP119',
        lastUpdated: '2025-04-18T16:30:00Z'
      },
      cardData: {
        cardNumber: '3530 1113 3330 0001',
        validFrom: '2021-04-01',
        validTill: '2026-04-01',
        dateOfIssue: '2021-04-01',
        pin: '6677',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '358',
        cardStatus: 'Active',
        dailyLimit: 35000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST018',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA1823456797',
        accountType: 'Current',
        balance: 76000,
        status: 'Frozen',
        openingDate: '2020-06-28',
        createdBy: 'EMP120',
        lastUpdated: '2025-04-24T15:00:00Z'
      },
      cardData: {
        cardNumber: '4100 0010 0100 0100',
        validFrom: '2021-09-01',
        validTill: '2026-09-01',
        dateOfIssue: '2021-09-01',
        pin: '1122',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '963',
        cardStatus: 'Active',
        dailyLimit: 50000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST019',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA1923456798',
        accountType: 'Savings',
        balance: 54000,
        status: 'Closed',
        openingDate: '2021-12-15',
        createdBy: 'EMP121',
        lastUpdated: '2025-04-25T17:10:00Z'
      },
      cardData: {
        cardNumber: '4222 1222 1234 5678',
        validFrom: '2022-05-01',
        validTill: '2027-05-01',
        dateOfIssue: '2022-05-01',
        pin: '4455',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '741',
        cardStatus: 'Blocked',
        dailyLimit: 65000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST020',
      branch: 'Hyderabad Branch',
      accountData: {
        accountNumber: 'BA2023456799',
        accountType: 'Current',
        balance: 130000,
        status: 'Active',
        openingDate: '2018-02-05',
        createdBy: 'EMP122',
        lastUpdated: '2025-04-27T13:40:00Z'
      },
      cardData: {
        cardNumber: '5500 1111 2222 3333',
        validFrom: '2019-11-01',
        validTill: '2024-11-01',
        dateOfIssue: '2019-11-01',
        pin: '5566',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '369',
        cardStatus: 'Expired',
        dailyLimit: 90000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST021',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA2123456800',
        accountType: 'Savings',
        balance: 9000,
        status: 'Active',
        openingDate: '2022-06-06',
        createdBy: 'EMP123',
        lastUpdated: '2025-04-23T14:00:00Z'
      },
      cardData: {
        cardNumber: '5019 0019 0019 0019',
        validFrom: '2022-07-01',
        validTill: '2027-07-01',
        dateOfIssue: '2022-07-01',
        pin: '2233',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '128',
        cardStatus: 'Active',
        dailyLimit: 25000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST022',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA2223456801',
        accountType: 'Current',
        balance: 50000,
        status: 'Frozen',
        openingDate: '2020-04-25',
        createdBy: 'EMP124',
        lastUpdated: '2025-04-21T18:50:00Z'
      },
      cardData: {
        cardNumber: '5454 5454 5454 5454',
        validFrom: '2020-05-01',
        validTill: '2025-05-01',
        dateOfIssue: '2020-05-01',
        pin: '4455',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '852',
        cardStatus: 'Active',
        dailyLimit: 80000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST023',
      branch: 'Bangalore Branch',
      accountData: {
        accountNumber: 'BA2323456802',
        accountType: 'Savings',
        balance: 17000,
        status: 'Active',
        openingDate: '2019-11-15',
        createdBy: 'EMP125',
        lastUpdated: '2025-04-26T19:10:00Z'
      },
      cardData: {
        cardNumber: '3411 1111 1111 1112',
        validFrom: '2020-06-01',
        validTill: '2025-06-01',
        dateOfIssue: '2020-06-01',
        pin: '2233',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '903',
        cardStatus: 'Blocked',
        dailyLimit: 35000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST024',
      branch: 'Hyderabad Branch',
      accountData: {
        accountNumber: 'BA2423456803',
        accountType: 'Current',
        balance: 67000,
        status: 'Active',
        openingDate: '2021-02-18',
        createdBy: 'EMP126',
        lastUpdated: '2025-04-22T12:50:00Z'
      },
      cardData: {
        cardNumber: '4234 2345 2345 2345',
        validFrom: '2021-04-01',
        validTill: '2026-04-01',
        dateOfIssue: '2021-04-01',
        pin: '8899',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '231',
        cardStatus: 'Active',
        dailyLimit: 60000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST025',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA2523456804',
        accountType: 'Savings',
        balance: 82000,
        status: 'Frozen',
        openingDate: '2021-05-10',
        createdBy: 'EMP127',
        lastUpdated: '2025-04-23T10:40:00Z'
      },
      cardData: {
        cardNumber: '5500 5555 5555 5555',
        validFrom: '2021-06-01',
        validTill: '2026-06-01',
        dateOfIssue: '2021-06-01',
        pin: '6677',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '451',
        cardStatus: 'Active',
        dailyLimit: 75000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST026',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA2623456805',
        accountType: 'Current',
        balance: 45000,
        status: 'Closed',
        openingDate: '2022-08-12',
        createdBy: 'EMP128',
        lastUpdated: '2025-04-19T09:30:00Z'
      },
      cardData: {
        cardNumber: '6011 1111 1111 3333',
        validFrom: '2022-09-01',
        validTill: '2027-09-01',
        dateOfIssue: '2022-09-01',
        pin: '9988',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '762',
        cardStatus: 'Active',
        dailyLimit: 50000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST027',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA2723456806',
        accountType: 'Savings',
        balance: 38000,
        status: 'Active',
        openingDate: '2021-07-01',
        createdBy: 'EMP129',
        lastUpdated: '2025-04-22T14:40:00Z'
      },
      cardData: {
        cardNumber: '4111 1234 5678 9012',
        validFrom: '2021-08-01',
        validTill: '2026-08-01',
        dateOfIssue: '2021-08-01',
        pin: '3344',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '492',
        cardStatus: 'Active',
        dailyLimit: 45000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST028',
      branch: 'Hyderabad Branch',
      accountData: {
        accountNumber: 'BA2823456807',
        accountType: 'Current',
        balance: 85000,
        status: 'Active',
        openingDate: '2020-09-10',
        createdBy: 'EMP130',
        lastUpdated: '2025-04-18T11:20:00Z'
      },
      cardData: {
        cardNumber: '5020 5555 1111 2345',
        validFrom: '2020-10-01',
        validTill: '2025-10-01',
        dateOfIssue: '2020-10-01',
        pin: '5566',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '643',
        cardStatus: 'Expired',
        dailyLimit: 100000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST029',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA2923456808',
        accountType: 'Savings',
        balance: 22000,
        status: 'Frozen',
        openingDate: '2021-12-20',
        createdBy: 'EMP131',
        lastUpdated: '2025-04-24T12:00:00Z'
      },
      cardData: {
        cardNumber: '5454 2222 3333 4444',
        validFrom: '2022-01-01',
        validTill: '2027-01-01',
        dateOfIssue: '2022-01-01',
        pin: '6677',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '111',
        cardStatus: 'Active',
        dailyLimit: 25000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST030',
      branch: 'Bangalore Branch',
      accountData: {
        accountNumber: 'BA3023456809',
        accountType: 'Current',
        balance: 54000,
        status: 'Active',
        openingDate: '2020-11-10',
        createdBy: 'EMP132',
        lastUpdated: '2025-04-19T13:50:00Z'
      },
      cardData: {
        cardNumber: '3560 1111 2222 3333',
        validFrom: '2021-05-01',
        validTill: '2026-05-01',
        dateOfIssue: '2021-05-01',
        pin: '7788',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '375',
        cardStatus: 'Active',
        dailyLimit: 70000,
        internationalUsageEnabled: true
      }
    }


    ]
    
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
