import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  global : any;
  branches : any;
  accounts : any;
  complaints : any;  
  dashboard : any;
  employees: any;
  funds : any;
  loans : any ;
  transactions : any;
  constructor() { 

   
    this.global = {
      branches : [
        { branchId: 'All', branchName: 'All', location: 'All', region: 'All' },
        { branchId: 'BR001', branchName: 'Mumbai Main Branch', location: 'Mumbai', region: 'Western' },
        { branchId: 'BR002', branchName: 'Delhi Branch', location: 'Delhi', region: 'Northern' },
        { branchId: 'BR003', branchName: 'Chennai Branch', location: 'Chennai', region: 'Southern' },
        { branchId: 'BR004', branchName: 'Pune Branch', location: 'Pune', region: 'Western' },
        { branchId: 'BR005', branchName: 'Bangalore Branch', location: 'Bangalore', region: 'Southern' },
        { branchId: 'BR006', branchName: 'Hyderabad Branch', location: 'Hyderabad', region: 'Southern' }
      ],

      bool : [
        {name : "True" , value : true},
        {name : "False" , value : false},
      ]
    }
   


    this.accounts = {
    accountTypeList : [
      {name: "All" ,value: "All" },
      {name: "Savings" , value: "Savings" },
      {name: "Current" , value: "Current"},
     
    ],

    accountData :[
      {
      customerId: 'CUST001',
      branch: 'Mumbai Main Branch',
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,

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
      cardAlloted : true,

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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,

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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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
      cardAlloted : true,
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


    ],

    status : [
      {name: "All" , value : "All"},
      {name: "Active" , value : "Active"},
      {name: "Closed", value : "Closed"},
      {name: "Frozen", value : "Frozen"},
    ],

    form: {

      branches : [
       
        { branchId: 'BR001', branchName: 'Mumbai Main Branch', location: 'Mumbai', region: 'Western' },
        { branchId: 'BR002', branchName: 'Delhi Branch', location: 'Delhi', region: 'Northern' },
        { branchId: 'BR003', branchName: 'Chennai Branch', location: 'Chennai', region: 'Southern' },
        { branchId: 'BR004', branchName: 'Pune Branch', location: 'Pune', region: 'Western' },
        { branchId: 'BR005', branchName: 'Bangalore Branch', location: 'Bangalore', region: 'Southern' },
        { branchId: 'BR006', branchName: 'Hyderabad Branch', location: 'Hyderabad', region: 'Southern' }
      ],
      accountTypeList : [
     
        {name: "Savings" , value: "Savings" },
        {name: "Current" , value: "Current"},
       
      ],
      status : [
        {name: "Active" , value : "Active"},
        {name: "Closed", value : "Closed"},
        {name: "Frozen", value : "Frozen"},
      ],
  

      formaccount : {
        customerId: '',
        branch: '',
        accountData: {
          accountNumber: '',
          accountType: '',
          balance: null,
          status: '',
          openingDate: '',
          createdBy: '',
          lastUpdated: ''
        },
        cardData: {
          cardNumber: '',
          validFrom: '',
          validTill: '',
          dateOfIssue: '',
          pin: '',
          cardType: '',
          cardLevel: '',
          cvv: '',
          cardStatus: '',
          dailyLimit: null,
          internationalUsageEnabled: false
        }
      },
    }
  
  

    }

    this.branches = {

      branchesData : [
      {
        branchId: 'BR001',
        branchName: 'Mumbai Main Branch',
        location: 'Mumbai',
        region: 'Western',
        growth: {revenue: 102.3, profit: 17.9, npa: 2.5},
        yearlyPerformance: [30, 42, 43, 39, 40, 36, 35, 32, 43, 50, 67, 65],
        transactionCategoryDistribution: {
          deposits: 40,
          withdrawals: 30,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E001',
            name: 'Amit Sharma',
            position: 'Branch Manager',
            performanceRating: 92
          },
          averagePerformanceRating: 84
        }
        ,
        loanTypeDistribution: {
          homeLoans: 35,
          personalLoans: 25,
          autoLoans: 20,
          businessLoans: 15,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 50,
          overdue: 20,
          pending: 25,
          defaulted: 5
        },
        performance: {
          overall: 80, // performance score out of 100
          growth: '10% increase from last year',
          transactions: {
            totalTransactions: 15000,
            successfulTransactions: 14000,
            failedTransactions: 1000
          }
        },
        employees: [
          { employeeId: 'E001', name: 'Amit Sharma', position: 'Branch Manager', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 90 },
          { employeeId: 'E002', name: 'Priya Gupta', position: 'Assistant Manager', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 85 },
          { employeeId: 'E003', name: 'Ravi Mehta', position: 'Loan Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 88 },
          { employeeId: 'E004', name: 'Neha Joshi', position: 'Customer Service Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 80 },
          { employeeId: 'E005', name: 'Rajesh Patil', position: 'Relationship Manager', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 75 },
          { employeeId: 'E006', name: 'Sonal Desai', position: 'Operations Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 78 },
          { employeeId: 'E007', name: 'Anil Khanna', position: 'Audit Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 82 },
          { employeeId: 'E008', name: 'Meena Iyer', position: 'Accounts Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 79 },
          { employeeId: 'E009', name: 'Devansh Saxena', position: 'Compliance Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 81 },
          { employeeId: 'E010', name: 'Ritika Bansal', position: 'HR Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 77 },
          { employeeId: 'E011', name: 'Shubham Malhotra', position: 'Marketing Executive', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 74 },
          { employeeId: 'E012', name: 'Divya Sethi', position: 'Customer Relationship Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 80 },
          { employeeId: 'E013', name: 'Kunal Kapoor', position: 'IT Support Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 76 },
          { employeeId: 'E014', name: 'Poonam Nair', position: 'Service Manager', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 83 },
          { employeeId: 'E015', name: 'Harsh Vyas', position: 'Credit Analyst', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 86 }
        ]
        
      },
      {
        branchId: 'BR002',
        branchName: 'Delhi Branch',
        location: 'Delhi',
        region: 'Northern',
        growth: {revenue: 105.0, profit: 18.5, npa: 2.1},
        yearlyPerformance: [42, 50, 60, 65, 65, 70, 53, 65, 54, 40, 30, 35],
        transactionCategoryDistribution: {
          deposits: 50,
          withdrawals: 25,
          loanPayments: 15,
          moneyTransfers: 5,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E021',
            name: 'Ritika Chopra',
            position: 'Senior Manager',
            performanceRating: 94
          },
          averagePerformanceRating: 82
        },
        loanTypeDistribution: {
          homeLoans: 40,
          personalLoans: 30,
          autoLoans: 15,
          businessLoans: 10,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 60,
          overdue: 15,
          pending: 20,
          defaulted: 5
        },
        performance: {
          overall: 85,
          growth: '15% increase from last year',
          transactions: {
            totalTransactions: 12000,
            successfulTransactions: 11500,
            failedTransactions: 500
          }
        },
        employees: [
          { employeeId: 'E016', name: 'Arjun Sinha', position: 'Branch Manager', branch: 'Delhi Branch', region: 'Northern', performanceRating: 91 },
          { employeeId: 'E017', name: 'Isha Chawla', position: 'Assistant Manager', branch: 'Delhi Branch', region: 'Northern', performanceRating: 87 },
          { employeeId: 'E018', name: 'Sandeep Verma', position: 'Loan Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 84 },
          { employeeId: 'E019', name: 'Tanya Kapoor', position: 'Customer Service Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 79 },
          { employeeId: 'E020', name: 'Vikram Singh', position: 'Relationship Manager', branch: 'Delhi Branch', region: 'Northern', performanceRating: 83 },
          { employeeId: 'E021', name: 'Shruti Pandey', position: 'Operations Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 76 },
          { employeeId: 'E022', name: 'Deepak Arora', position: 'Audit Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 80 },
          { employeeId: 'E023', name: 'Komal Bhatt', position: 'Accounts Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 78 },
          { employeeId: 'E024', name: 'Ankit Tyagi', position: 'Compliance Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 81 },
          { employeeId: 'E025', name: 'Pallavi Chauhan', position: 'HR Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 75 },
          { employeeId: 'E026', name: 'Rohit Batra', position: 'Marketing Executive', branch: 'Delhi Branch', region: 'Northern', performanceRating: 77 },
          { employeeId: 'E027', name: 'Sneha Anand', position: 'Customer Relationship Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 82 },
          { employeeId: 'E028', name: 'Yashwant Chawla', position: 'IT Support Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 74 },
          { employeeId: 'E029', name: 'Nisha Bedi', position: 'Service Manager', branch: 'Delhi Branch', region: 'Northern', performanceRating: 85 },
          { employeeId: 'E030', name: 'Tarun Ahuja', position: 'Credit Analyst', branch: 'Delhi Branch', region: 'Northern', performanceRating: 88 }
        ]
        
      },
      {
        branchId: 'BR003',
        branchName: 'Chennai Branch',
        location: 'Chennai',
        region: 'Southern',
        growth: {revenue: 89.7, profit: 15.0, npa: 2.0 },
        yearlyPerformance: [20, 32, 45, 57, 60, 63, 65, 77, 80, 82, 93, 95],
        transactionCategoryDistribution: {
          deposits: 45,
          withdrawals: 25,
          loanPayments: 10,
          moneyTransfers: 15,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E045',
            name: 'Ananya Krishnan',
            position: 'Branch Manager',
            performanceRating: 95
          },
          averagePerformanceRating: 84
        },
        loanTypeDistribution: {
          homeLoans: 30,
          personalLoans: 35,
          autoLoans: 20,
          businessLoans: 10,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 55,
          overdue: 15,
          pending: 20,
          defaulted: 10
        },
        performance: {
          overall: 70,
          growth: '5% increase from last year',
          transactions: {
            totalTransactions: 10000,
            successfulTransactions: 9500,
            failedTransactions: 500
          }
        },
        employees: [
          { employeeId: 'E031', name: 'Karthik Raj', position: 'Branch Manager', branch: 'Chennai Branch', region: 'Southern', performanceRating: 92 },
          { employeeId: 'E032', name: 'Divya Natarajan', position: 'Assistant Manager', branch: 'Chennai Branch', region: 'Southern', performanceRating: 86 },
          { employeeId: 'E033', name: 'Suresh Reddy', position: 'Loan Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 84 },
          { employeeId: 'E034', name: 'Meena Srinivasan', position: 'Customer Service Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E035', name: 'Prakash Menon', position: 'Relationship Manager', branch: 'Chennai Branch', region: 'Southern', performanceRating: 79 },
          { employeeId: 'E036', name: 'Aishwarya Mohan', position: 'Operations Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 77 },
          { employeeId: 'E037', name: 'Ravi Krishnan', position: 'Audit Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E038', name: 'Lakshmi Priya', position: 'Accounts Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 78 },
          { employeeId: 'E039', name: 'Manoj Balaji', position: 'Compliance Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 83 },
          { employeeId: 'E040', name: 'Priyanka Subramanian', position: 'HR Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 76 },
          { employeeId: 'E041', name: 'Siddharth Varma', position: 'Marketing Executive', branch: 'Chennai Branch', region: 'Southern', performanceRating: 74 },
          { employeeId: 'E042', name: 'Gayathri Iyer', position: 'Customer Relationship Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E043', name: 'Vishal Mohan', position: 'IT Support Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 75 },
          { employeeId: 'E044', name: 'Bhavana Krishnan', position: 'Service Manager', branch: 'Chennai Branch', region: 'Southern', performanceRating: 84 },
          { employeeId: 'E045', name: 'Ajay Raman', position: 'Credit Analyst', branch: 'Chennai Branch', region: 'Southern', performanceRating: 87 }
        ]
        
      },
      {
        branchId: 'BR004',
        branchName: 'Pune Branch',
        location: 'Pune',
        region: 'Western',
        growth : {revenue: 84.1, profit: 13.9, npa: 2.2 },
        yearlyPerformance: [65, 67, 50, 43, 32, 35, 36, 40, 39, 43, 42, 30],
        transactionCategoryDistribution: {
          deposits: 40,
          withdrawals: 30,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E060',
            name: 'Vikas Kulkarni',
            position: 'Senior Manager',
            performanceRating: 92
          },
          averagePerformanceRating: 81
        },
        loanTypeDistribution: {
          homeLoans: 30,
          personalLoans: 25,
          autoLoans: 25,
          businessLoans: 15,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 65,
          overdue: 20,
          pending: 10,
          defaulted: 5
        },
        performance: {
          overall: 78,
          growth: '12% increase from last year',
          transactions: {
            totalTransactions: 14000,
            successfulTransactions: 13500,
            failedTransactions: 500
          }
        },
        employees: [
          { employeeId: 'E046', name: 'Aditya Kulkarni', position: 'Branch Manager', branch: 'Pune Branch', region: 'Western', performanceRating: 90 },
          { employeeId: 'E047', name: 'Sneha Joshi', position: 'Assistant Manager', branch: 'Pune Branch', region: 'Western', performanceRating: 86 },
          { employeeId: 'E048', name: 'Rohan Patil', position: 'Loan Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 83 },
          { employeeId: 'E049', name: 'Neha Deshpande', position: 'Customer Service Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 81 },
          { employeeId: 'E050', name: 'Siddharth Naik', position: 'Relationship Manager', branch: 'Pune Branch', region: 'Western', performanceRating: 79 },
          { employeeId: 'E051', name: 'Prachi Apte', position: 'Operations Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 82 },
          { employeeId: 'E052', name: 'Ashutosh Jadhav', position: 'Audit Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 80 },
          { employeeId: 'E053', name: 'Vrushali Shinde', position: 'Accounts Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 78 },
          { employeeId: 'E054', name: 'Nikhil More', position: 'Compliance Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 77 },
          { employeeId: 'E055', name: 'Komal Bhujbal', position: 'HR Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 79 },
          { employeeId: 'E056', name: 'Mandar Dixit', position: 'Marketing Executive', branch: 'Pune Branch', region: 'Western', performanceRating: 75 },
          { employeeId: 'E057', name: 'Ketaki Gokhale', position: 'Customer Relationship Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 80 },
          { employeeId: 'E058', name: 'Akshay Raut', position: 'IT Support Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 76 },
          { employeeId: 'E059', name: 'Shraddha Pathak', position: 'Service Manager', branch: 'Pune Branch', region: 'Western', performanceRating: 83 },
          { employeeId: 'E060', name: 'Omkar Chavan', position: 'Credit Analyst', branch: 'Pune Branch', region: 'Western', performanceRating: 85 }
        ]
        
      },
      {
        branchId: 'BR005',
        branchName: 'Bangalore Branch',
        location: 'Bangalore',
        region: 'Southern',
        growth: { revenue: 95.6, profit: 16.2, npa: 1.8},
        yearlyPerformance: [72, 74, 76, 78, 80, 83, 86, 88, 90, 92, 95, 97],
        transactionCategoryDistribution: {
          deposits: 45,
          withdrawals: 30,
          loanPayments: 10,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E075',
            name: 'Ravi Chandrasekhar',
            position: 'Branch Manager',
            performanceRating: 97
          },
          averagePerformanceRating: 88
        },
        loanTypeDistribution: {
          homeLoans: 40,
          personalLoans: 20,
          autoLoans: 25,
          businessLoans: 10,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 50,
          overdue: 25,
          pending: 20,
          defaulted: 5
        },
        performance: {
          overall: 80,
          growth: '8% increase from last year',
          transactions: {
            totalTransactions: 11000,
            successfulTransactions: 10500,
            failedTransactions: 500
          }
        },
        employees: [
          { employeeId: 'E061', name: 'Rahul Shetty', position: 'Branch Manager', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 92 },
          { employeeId: 'E062', name: 'Ananya Rao', position: 'Assistant Manager', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 88 },
          { employeeId: 'E063', name: 'Naveen Kumar', position: 'Loan Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 85 },
          { employeeId: 'E064', name: 'Divya Menon', position: 'Customer Service Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E065', name: 'Suresh Bhat', position: 'Relationship Manager', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 84 },
          { employeeId: 'E066', name: 'Pooja Nambiar', position: 'Operations Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 79 },
          { employeeId: 'E067', name: 'Ashwin Reddy', position: 'Audit Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 82 },
          { employeeId: 'E068', name: 'Smitha Gowda', position: 'Accounts Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 78 },
          { employeeId: 'E069', name: 'Arvind Hegde', position: 'Compliance Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E070', name: 'Nikita Desai', position: 'HR Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 77 },
          { employeeId: 'E071', name: 'Rakesh Shenoy', position: 'Marketing Executive', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 79 },
          { employeeId: 'E072', name: 'Vidya Pai', position: 'Customer Relationship Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E073', name: 'Vinay Prabhu', position: 'IT Support Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 76 },
          { employeeId: 'E074', name: 'Prajwal Kamath', position: 'Service Manager', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 83 },
          { employeeId: 'E075', name: 'Manasa Bhat', position: 'Credit Analyst', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 86 }
        ]
        
      },
      {
        branchId: 'BR006',
        branchName: 'Hyderabad Branch',
        location: 'Hyderabad',
        region: 'Southern',
        growth: {revenue: 76.2, profit: 12.4, npa: 2.6},
        yearlyPerformance: [40, 78, 80, 50, 90, 94, 55, 34, 45, 60, 50, 40],
        transactionCategoryDistribution: {
          deposits: 50,
          withdrawals: 20,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E090',
            name: 'Shravan Kumar',
            position: 'Senior Manager',
            performanceRating: 95
          },
          averagePerformanceRating: 83
        },
        loanTypeDistribution: {
          homeLoans: 30,
          personalLoans: 40,
          autoLoans: 15,
          businessLoans: 10,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 60,
          overdue: 10,
          pending: 25,
          defaulted: 5
        },
        performance: {
          overall: 85,
          growth: '12% increase from last year',
          transactions: {
            totalTransactions: 13000,
            successfulTransactions: 12500,
            failedTransactions: 500
          }
        },
        employees: [
          { employeeId: 'E076', name: 'Vikram Reddy', position: 'Branch Manager', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 91 },
          { employeeId: 'E077', name: 'Shruti Rao', position: 'Assistant Manager', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 87 },
          { employeeId: 'E078', name: 'Kiran Varma', position: 'Loan Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 84 },
          { employeeId: 'E079', name: 'Anusha Iyer', position: 'Customer Service Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 82 },
          { employeeId: 'E080', name: 'Ramesh Kiran', position: 'Relationship Manager', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E081', name: 'Swathi Menon', position: 'Operations Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 78 },
          { employeeId: 'E082', name: 'Sanjay Krishna', position: 'Audit Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E083', name: 'Keerthi Reddy', position: 'Accounts Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 79 },
          { employeeId: 'E084', name: 'Chaitanya Rao', position: 'Compliance Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E085', name: 'Pavitra Murthy', position: 'HR Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 77 },
          { employeeId: 'E086', name: 'Tejaswini Naidu', position: 'Marketing Executive', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 75 },
          { employeeId: 'E087', name: 'Praveen Yadav', position: 'Customer Relationship Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E088', name: 'Bhavya Choudhary', position: 'IT Support Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 76 },
          { employeeId: 'E089', name: 'Aravind Das', position: 'Service Manager', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 82 },
          { employeeId: 'E090', name: 'Divya Krishna', position: 'Credit Analyst', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 85 }
        ]
        
      }
      ]
    }

    this.complaints = {
      complaintsData : [
        {
          complaintId: 'CPL001',
          customerName: 'John Doe',
          complaintType: 'Billing',
          complaintDescription: 'Incorrect billing for last month\'s transaction.',
          complaintDate: '2023-04-10',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Refund processed to the customer.',
          resolutionDate: '2023-04-12',
          assignedTo: 'Support Team A',
          priority: 'High',
          followUpDate: '2023-04-15'
        },
        {
          complaintId: 'CPL002',
          customerName: 'Sarah Lee',
          complaintType: 'Technical Issue',
          complaintDescription: 'Unable to access my online account after password reset.',
          complaintDate: '2023-04-14',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team B',
          priority: 'Medium',
          followUpDate: '2023-04-16'
        },
        {
          complaintId: 'CPL003',
          customerName: 'Michael Brown',
          complaintType: 'Card Issue',
          complaintDescription: 'Card not working at ATM, blocked card.',
          complaintDate: '2023-04-15',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Card blocked, new card issued.',
          resolutionDate: '2023-04-16',
          assignedTo: 'Support Team C',
          priority: 'Low',
          followUpDate: '2023-04-18'
        },
        {
          complaintId: 'CPL004',
          customerName: 'Emily Clark',
          complaintType: 'Fraud Alert',
          complaintDescription: 'Unauthorized transaction detected on my credit card.',
          complaintDate: '2023-04-16',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Security Team A',
          priority: 'High',
          followUpDate: '2023-04-18'
        },
        {
          complaintId: 'CPL005',
          customerName: 'David Smith',
          complaintType: 'General Inquiry',
          complaintDescription: 'Clarification on transaction limits for international usage.',
          complaintDate: '2023-04-17',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Customer provided with transaction limits for international usage.',
          resolutionDate: '2023-04-17',
          assignedTo: 'Support Team D',
          priority: 'Low',
          followUpDate: '2023-04-20'
        },
        {
          complaintId: 'CPL006',
          customerName: 'Olivia Johnson',
          complaintType: 'Account Access',
          complaintDescription: 'Unable to reset account password.',
          complaintDate: '2023-04-17',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team B',
          priority: 'Medium',
          followUpDate: '2023-04-19'
        },
        {
          complaintId: 'CPL007',
          customerName: 'Robert Harris',
          complaintType: 'Card Issue',
          complaintDescription: 'Card blocked due to multiple failed login attempts.',
          complaintDate: '2023-04-18',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Card unblocked and new PIN issued.',
          resolutionDate: '2023-04-19',
          assignedTo: 'Support Team C',
          priority: 'Medium',
          followUpDate: '2023-04-22'
        },
        {
          complaintId: 'CPL008',
          customerName: 'Sophia Williams',
          complaintType: 'Billing',
          complaintDescription: 'Wrong charges applied to the account for international transactions.',
          complaintDate: '2023-04-19',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Charges corrected and refunded.',
          resolutionDate: '2023-04-21',
          assignedTo: 'Support Team A',
          priority: 'High',
          followUpDate: '2023-04-23'
        },
        {
          complaintId: 'CPL009',
          customerName: 'James Wilson',
          complaintType: 'Fraud Alert',
          complaintDescription: 'Fraudulent activity detected on the credit card.',
          complaintDate: '2023-04-20',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Security Team B',
          priority: 'High',
          followUpDate: '2023-04-22'
        },
        {
          complaintId: 'CPL010',
          customerName: 'Isabella Moore',
          complaintType: 'Technical Issue',
          complaintDescription: 'App crashes when accessing my bank statements.',
          complaintDate: '2023-04-21',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team C',
          priority: 'Medium',
          followUpDate: '2023-04-23'
        },
        {
          complaintId: 'CPL011',
          customerName: 'William Taylor',
          complaintType: 'Card Issue',
          complaintDescription: 'Card not working on online transactions.',
          complaintDate: '2023-04-22',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Card reactivated for online transactions.',
          resolutionDate: '2023-04-23',
          assignedTo: 'Support Team A',
          priority: 'Low',
          followUpDate: '2023-04-25'
        },
        {
          complaintId: 'CPL012',
          customerName: 'Charlotte Martinez',
          complaintType: 'Account Access',
          complaintDescription: 'Unable to access my account after password reset.',
          complaintDate: '2023-04-23',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Password reset successfully.',
          resolutionDate: '2023-04-23',
          assignedTo: 'Support Team B',
          priority: 'High',
          followUpDate: '2023-04-25'
        },
        {
          complaintId: 'CPL013',
          customerName: 'Ava Robinson',
          complaintType: 'General Inquiry',
          complaintDescription: 'Questions about cashback rewards on debit cards.',
          complaintDate: '2023-04-24',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Customer provided with details on cashback rewards.',
          resolutionDate: '2023-04-24',
          assignedTo: 'Support Team C',
          priority: 'Low',
          followUpDate: '2023-04-26'
        },
        {
          complaintId: 'CPL014',
          customerName: 'Liam Davis',
          complaintType: 'Billing',
          complaintDescription: 'Discrepancy in the billing amount for the recent payment.',
          complaintDate: '2023-04-24',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team D',
          priority: 'Medium',
          followUpDate: '2023-04-26'
        },
        {
          complaintId: 'CPL015',
          customerName: 'Mason Anderson',
          complaintType: 'Fraud Alert',
          complaintDescription: 'Unusual transaction detected in the account.',
          complaintDate: '2023-04-25',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Security Team A',
          priority: 'High',
          followUpDate: '2023-04-27'
        },
        {
          complaintId: 'CPL016',
          customerName: 'Ella Thomas',
          complaintType: 'Technical Issue',
          complaintDescription: 'Unable to link my external bank account to the app.',
          complaintDate: '2023-04-26',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team B',
          priority: 'Medium',
          followUpDate: '2023-04-28'
        },
        {
          complaintId: 'CPL017',
          customerName: 'Ethan Jackson',
          complaintType: 'Card Issue',
          complaintDescription: 'Card not working at POS terminals.',
          complaintDate: '2023-04-26',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Card reactivated for POS usage.',
          resolutionDate: '2023-04-27',
          assignedTo: 'Support Team C',
          priority: 'Low',
          followUpDate: '2023-04-29'
        },
        {
          complaintId: 'CPL018',
          customerName: 'James White',
          complaintType: 'Account Access',
          complaintDescription: 'Cannot reset my account password.',
          complaintDate: '2023-04-27',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Password reset successfully.',
          resolutionDate: '2023-04-27',
          assignedTo: 'Support Team A',
          priority: 'High',
          followUpDate: '2023-04-29'
        },
        {
          complaintId: 'CPL019',
          customerName: 'Benjamin Harris',
          complaintType: 'General Inquiry',
          complaintDescription: 'Questions regarding monthly service charges.',
          complaintDate: '2023-04-28',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Customer clarified on monthly service charges.',
          resolutionDate: '2023-04-28',
          assignedTo: 'Support Team B',
          priority: 'Low',
          followUpDate: '2023-04-30'
        },
        {
          complaintId: 'CPL020',
          customerName: 'Sophie Clark',
          complaintType: 'Billing',
          complaintDescription: 'Discrepancy in the bill after a recent transaction.',
          complaintDate: '2023-04-28',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team D',
          priority: 'Medium',
          followUpDate: '2023-05-01'
        },

        {
          complaintId: 'CPL021',
          customerName: 'Chloe Bennett',
          complaintType: 'Technical Issue',
          complaintDescription: 'App logs out frequently during transactions.',
          complaintDate: '2023-04-29',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team C',
          priority: 'Medium',
          followUpDate: '2023-05-02'
        },
        
        {
          complaintId: 'CPL022',
          customerName: 'Noah Turner',
          complaintType: 'Billing',
          complaintDescription: 'Charged twice for a single purchase.',
          complaintDate: '2023-04-30',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team A',
          priority: 'High',
          followUpDate: '2023-05-03'
        },
        
        {
          complaintId: 'CPL023',
          customerName: 'Grace Hall',
          complaintType: 'Fraud Alert',
          complaintDescription: 'Multiple unknown withdrawals in account history.',
          complaintDate: '2023-05-01',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Security Team B',
          priority: 'High',
          followUpDate: '2023-05-04'
        },
        
        {
          complaintId: 'CPL024',
          customerName: 'Lucas Wright',
          complaintType: 'Account Access',
          complaintDescription: 'MFA not working when trying to log in.',
          complaintDate: '2023-05-01',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team B',
          priority: 'High',
          followUpDate: '2023-05-05'
        },
        {
          complaintId: 'CPL025',
          customerName: 'Amelia Scott',
          complaintType: 'Technical Issue',
          complaintDescription: 'Unexpected logout and data sync issues.',
          complaintDate: '2023-05-02',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Tech Team A',
          priority: 'Medium',
          followUpDate: '2023-05-06'
        },
        {
          complaintId: 'CPL026',
          customerName: 'Henry Walker',
          complaintType: 'Card Issue',
          complaintDescription: 'Card declined during international travel.',
          complaintDate: '2023-05-03',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team C',
          priority: 'High',
          followUpDate: '2023-05-06'
        },
        
        {
          complaintId: 'CPL027',
          customerName: 'Mila Young',
          complaintType: 'Fraud Alert',
          complaintDescription: 'Strange activity on account during non-working hours.',
          complaintDate: '2023-05-04',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Security Team A',
          priority: 'High',
          followUpDate: '2023-05-07'
        },
        
        {
          complaintId: 'CPL028',
          customerName: 'Daniel King',
          complaintType: 'Account Access',
          complaintDescription: 'Face ID not working with mobile banking app.',
          complaintDate: '2023-05-04',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team B',
          priority: 'Medium',
          followUpDate: '2023-05-07'
        },
        
        {
          complaintId: 'CPL029',
          customerName: 'Aria Nelson',
          complaintType: 'Billing',
          complaintDescription: 'Late fee applied despite timely payment.',
          complaintDate: '2023-05-05',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team D',
          priority: 'Medium',
          followUpDate: '2023-05-08'
        },
        
        {
          complaintId: 'CPL030',
          customerName: 'Logan Perez',
          complaintType: 'Technical Issue',
          complaintDescription: 'Transactions are not showing in the app.',
          complaintDate: '2023-05-06',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Tech Team A',
          priority: 'High',
          followUpDate: '2023-05-09'
        }

      ],

      priorityList : [
        { name: 'All', value: 'All' },
        { name: 'High', value: 'High' },
        { name: 'Low', value: 'Low' },
        { name: 'Medium', value: 'Medium' },
      ],

      supportTeamList : [
        { name: 'All', value: 'All' },
        { name: 'Support Team A', value: 'Support Team A' },
        { name: 'Support Team B', value: 'Support Team B' },
        { name: 'Support Team C', value: 'Support Team C' },
        { name: 'Support Team D', value: 'Support Team D' },
      ]
    }

    this.dashboard = {
      montlyTransactions : [102000, 118500, 125000, 113000, 140000, 138500, 145000, 149000, 135000, 142000, 100000, 68000],
      transactions : {Completed : 1375192 , Failed : 105214 , Pending :45594},
      transactionModes: {UPI: 540400,NEFT: 375569, RTGS: 211200,IMPS: 293462,  Cash: 105370},

        overallStats: {
        totalRevenue: 1850000000, // ₹185 Cr
        netProfit: 375000000,      // ₹37.5 Cr
        npa: 2.8,                 // 2.8% Non-Performing Assets
        customerBase: 1250000,    // 12.5 lakh customers
        totalAssets: 9500000000,   // ₹950 Cr
        totalDeposits: 6200000000, // ₹620 Cr
        totalLoansDisbursed: 4100000000, // ₹410 Cr
        creditToDepositRatio: 66.1,     // %
        capitalAdequacyRatio: 13.2,     // %
        operatingExpenses: 220000000,
        growthRate: 6.9      // ₹22 Cr
      },
      topEmployees : [
        {
          employeeId: 'E001',
          name: 'Amit Sharma',
          position: 'Branch Manager',
          performanceRating: 92,
          branch: 'Mumbai Main Branch',
          region: 'Western'
        },
        {
          employeeId: 'E021',
          name: 'Ritika Chopra',
          position: 'Senior Manager',
          performanceRating: 94,
          branch: 'Delhi Branch',
          region: 'Northern'
        },
        {
          employeeId: 'E045',
          name: 'Ananya Krishnan',
          position: 'Branch Manager',
          performanceRating: 95,
          branch: 'Chennai Branch',
          region: 'Southern'
        },
        {
          employeeId: 'E060',
          name: 'Vikas Kulkarni',
          position: 'Senior Manager',
          branch: 'Pune Branch',
          performanceRating: 92,
          region: 'Western'
        },
        {
          employeeId: 'E075',
          name: 'Ravi Chandrasekhar',
          position: 'Branch Manager',
          branch: 'Bangalore Branch',
          performanceRating: 97,
          region: 'Southern'
        },
        {
          employeeId: 'E090',
          name: 'Shravan Kumar',
          position: 'Senior Manager',
          branch: 'Hyderabad Branch',
          performanceRating: 95,
          region: 'Southern'
        }
      ]
    }

    this.employees ={
      
    employeesData : [
      {
        employeeId: 'EMP001',
        name: 'Amit Sharma',
        position: 'Branch Manager',
        department: 'Operations',
        dateOfJoining: '2015-06-15',
        contactNumber: '9876543210',
        email: 'amit.sharma@bank.com',
        branch: 'Mumbai Main Branch',
        employmentStatus: 'Active',
        salary: '₹12,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP002',
        name: 'Priya Gupta',
        position: 'Assistant Manager',
        department: 'Customer Service',
        dateOfJoining: '2017-08-01',
        contactNumber: '9876123456',
        email: 'priya.gupta@bank.com',
        branch: 'Delhi Branch',
        employmentStatus: 'Active',
        salary: '₹7,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP003',
        name: 'Rajesh Kumar',
        position: 'Senior Loan Officer',
        department: 'Loans and Mortgages',
        dateOfJoining: '2014-04-10',
        contactNumber: '9876789012',
        email: 'rajesh.kumar@bank.com',
        branch: 'Bangalore Branch',
        employmentStatus: 'Active',
        salary: '₹9,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP004',
        name: 'Anjali Verma',
        position: 'Operations Manager',
        department: 'Operations',
        dateOfJoining: '2016-02-25',
        contactNumber: '9876932101',
        email: 'anjali.verma@bank.com',
        branch: 'Chennai Branch',
        employmentStatus: 'Active',
        salary: '₹10,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP005',
        name: 'Vikram Singh',
        position: 'Risk Analyst',
        department: 'Risk Management',
        dateOfJoining: '2019-07-12',
        contactNumber: '9876512345',
        email: 'vikram.singh@bank.com',
        branch: 'Hyderabad Branch',
        employmentStatus: 'Active',
        salary: '₹8,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP006',
        name: 'Sonal Mehta',
        position: 'Relationship Manager',
        department: 'Sales',
        dateOfJoining: '2018-11-20',
        contactNumber: '9876987654',
        email: 'sonal.mehta@bank.com',
        branch: 'Pune Branch',
        employmentStatus: 'Active',
        salary: '₹6,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP007',
        name: 'Karan Patel',
        position: 'Branch Assistant',
        department: 'Customer Service',
        dateOfJoining: '2020-01-10',
        contactNumber: '9876723456',
        email: 'karan.patel@bank.com',
        branch: 'Mumbai Main Branch',
        employmentStatus: 'Active',
        salary: '₹4,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP008',
        name: 'Ravi Joshi',
        position: 'IT Support Specialist',
        department: 'IT',
        dateOfJoining: '2017-03-05',
        contactNumber: '9876321098',
        email: 'ravi.joshi@bank.com',
        branch: 'Delhi Branch',
        employmentStatus: 'Active',
        salary: '₹6,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP009',
        name: 'Nisha Reddy',
        position: 'HR Manager',
        department: 'Human Resources',
        dateOfJoining: '2014-09-01',
        contactNumber: '9876876543',
        email: 'nisha.reddy@bank.com',
        branch: 'Bangalore Branch',
        employmentStatus: 'Active',
        salary: '₹11,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP010',
        name: 'Manoj Agarwal',
        position: 'Branch Head',
        department: 'Operations',
        dateOfJoining: '2011-02-25',
        contactNumber: '9876540987',
        email: 'manoj.agarwal@bank.com',
        branch: 'Mumbai Main Branch',
        employmentStatus: 'Active',
        salary: '₹14,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP011',
        name: 'Shweta Singh',
        position: 'Loan Officer',
        department: 'Loans and Mortgages',
        dateOfJoining: '2020-06-19',
        contactNumber: '9876345678',
        email: 'shweta.singh@bank.com',
        branch: 'Hyderabad Branch',
        employmentStatus: 'Active',
        salary: '₹7,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP012',
        name: 'Sunil Bhatia',
        position: 'Senior Analyst',
        department: 'Compliance',
        dateOfJoining: '2015-12-10',
        contactNumber: '9876456789',
        email: 'sunil.bhatia@bank.com',
        branch: 'Pune Branch',
        employmentStatus: 'Active',
        salary: '₹8,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP013',
        name: 'Rita Kapoor',
        position: 'Chief Financial Officer',
        department: 'Finance',
        dateOfJoining: '2012-01-01',
        contactNumber: '9876547654',
        email: 'rita.kapoor@bank.com',
        branch: 'Mumbai Main Branch',
        employmentStatus: 'Active',
        salary: '₹20,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP014',
        name: 'Vikram Chauhan',
        position: 'Customer Support Executive',
        department: 'Customer Service',
        dateOfJoining: '2021-04-05',
        contactNumber: '9876784321',
        email: 'vikram.chauhan@bank.com',
        branch: 'Chennai Branch',
        employmentStatus: 'Active',
        salary: '₹5,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP015',
        name: 'Neha Agarwal',
        position: 'Marketing Manager',
        department: 'Marketing',
        dateOfJoining: '2016-07-25',
        contactNumber: '9876541321',
        email: 'neha.agarwal@bank.com',
        branch: 'Delhi Branch',
        employmentStatus: 'Active',
        salary: '₹9,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP016',
        name: 'Jatin Verma',
        position: 'Banking Associate',
        department: 'Customer Service',
        dateOfJoining: '2022-05-01',
        contactNumber: '9876789876',
        email: 'jatin.verma@bank.com',
        branch: 'Bangalore Branch',
        employmentStatus: 'Active',
        salary: '₹3,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP017',
        name: 'Ishita Thakur',
        position: 'Legal Advisor',
        department: 'Legal',
        dateOfJoining: '2014-06-30',
        contactNumber: '9876545432',
        email: 'ishita.thakur@bank.com',
        branch: 'Mumbai Main Branch',
        employmentStatus: 'Active',
        salary: '₹11,50,000',
        blocked: false,
      },
      {
        employeeId: 'EMP018',
        name: 'Arvind Singh',
        position: 'Relationship Manager',
        department: 'Sales',
        dateOfJoining: '2019-02-15',
        contactNumber: '9876890123',
        email: 'arvind.singh@bank.com',
        branch: 'Pune Branch',
        employmentStatus: 'Active',
        salary: '₹7,00,000',
        blocked: false,
      },
      {
        employeeId: 'EMP019',
        name: 'Pooja Joshi',
        position: 'Teller',
        department: 'Customer Service',
        dateOfJoining: '2020-03-18',
        contactNumber: '9876543213',
        email: 'pooja.joshi@bank.com',
        branch: 'Hyderabad Branch',
        employmentStatus: 'Active',
        salary: '₹4,50,000',
        blocked: true,
      },
      {
        employeeId: 'EMP020',
        name: 'Kavita Mehta',
        position: 'Branch Supervisor',
        department: 'Operations',
        dateOfJoining: '2017-09-22',
        contactNumber: '9876234567',
        email: 'kavita.mehta@bank.com',
        branch: 'Delhi Branch',
        employmentStatus: 'Active',
        salary: '₹6,00,000',
        blocked: true,
      },
      {
        employeeId: 'EMP021',
        name: 'Arvind Mehta',
        position: 'Legal Advisor',
        department: 'Legal',
        dateOfJoining: '2017-09-22',
        contactNumber: '9876689087',
        email: 'Arvind.mehta@bank.com',
        branch: 'Hyderabad Branch',
        employmentStatus: 'Active',
        salary: '₹9,00,000',
        blocked: true,
      }
    ],

    selectedEmployee : {
      employeeId: '',
      name: '',
      position: '',
      department: '',
      dateOfJoining: '',
      contactNumber: '',
      email: '',
      branch: '',
      employmentStatus: '',
      salary: '₹00',
      blocked: false,
    },
    }

    this.funds = {
      fundsData : {
        mutualFunds: [
          { fund: 'mutualfund', id: 1, fundName: 'ABC Growth Fund', overallGrowth: 25.4, riskProfile: 'Moderate', returns: { oneYear: 12.5, threeYear: 38.2, fiveYear: 67.8 }, fundManager: 'John Doe', launchDate: '2015-06-01', aum: '₹500 Cr', fundType: 'Large Cap', growthData: [{ date: '2024-01', value: 100 }, { date: '2024-02', value: 106 }, { date: '2024-03', value: 108 }, { date: '2024-04', value: 114 }, { date: '2024-05', value: 109 }] },
          { fund: 'mutualfund', id: 2, fundName: 'XYZ Equity Fund', overallGrowth: 40.7, riskProfile: 'High', returns: { oneYear: 18.3, threeYear: 50.2, fiveYear: 95.4 }, fundManager: 'Jane Smith', launchDate: '2012-04-15', aum: '₹800 Cr', fundType: 'Mid Cap', growthData: [{ date: '2024-01', value: 200 }, { date: '2024-02', value: 195 }, { date: '2024-03', value: 210 }, { date: '2024-04', value: 206 }, { date: '2024-05', value: 218 }] },
          { fund: 'mutualfund', id: 3, fundName: 'Prime Value Fund', overallGrowth: 32.1, riskProfile: 'Moderate', returns: { oneYear: 14.5, threeYear: 40.1, fiveYear: 72.3 }, fundManager: 'Nina Patel', launchDate: '2016-07-10', aum: '₹600 Cr', fundType: 'Balanced', growthData: [{ date: '2024-01', value: 120 }, { date: '2024-02', value: 128 }, { date: '2024-03', value: 121 }, { date: '2024-04', value: 135 }, { date: '2024-05', value: 130 }] },
          { fund: 'mutualfund', id: 4, fundName: 'Secure Wealth Fund', overallGrowth: 20.8, riskProfile: 'Low', returns: { oneYear: 8.5, threeYear: 24.1, fiveYear: 45.6 }, fundManager: 'Kevin Brown', launchDate: '2014-03-22', aum: '₹700 Cr', fundType: 'Debt', growthData: [{ date: '2024-01', value: 300 }, { date: '2024-02', value: 290 }, { date: '2024-03', value: 305 }, { date: '2024-04', value: 320 }, { date: '2024-05', value: 310 }] },
          { fund: 'mutualfund', id: 5, fundName: 'Sunrise Opportunity Fund', overallGrowth: 50.2, riskProfile: 'High', returns: { oneYear: 22.5, threeYear: 60.0, fiveYear: 105.5 }, fundManager: 'Sara White', launchDate: '2018-11-30', aum: '₹950 Cr', fundType: 'Small Cap', growthData: [{ date: '2024-01', value: 80 }, { date: '2024-02', value: 85 }, { date: '2024-03', value: 95 }, { date: '2024-04', value: 88 }, { date: '2024-05', value: 100 }] },
          { fund: 'mutualfund', id: 6, fundName: 'Vision Equity Fund', overallGrowth: 35.7, riskProfile: 'Moderate', returns: { oneYear: 15.2, threeYear: 42.3, fiveYear: 75.9 }, fundManager: 'David Green', launchDate: '2013-05-18', aum: '₹550 Cr', fundType: 'Multi Cap', growthData: [{ date: '2024-01', value: 170 }, { date: '2024-02', value: 168 }, { date: '2024-03', value: 182 }, { date: '2024-04', value: 176 }, { date: '2024-05', value: 189 }] },
          { fund: 'mutualfund', id: 7, fundName: 'Elite Wealth Fund', overallGrowth: 45.5, riskProfile: 'High', returns: { oneYear: 20.5, threeYear: 55.1, fiveYear: 90.7 }, fundManager: 'Emma Wilson', launchDate: '2017-02-05', aum: '₹670 Cr', fundType: 'Growth', growthData: [{ date: '2024-01', value: 400 }, { date: '2024-02', value: 395 }, { date: '2024-03', value: 410 }, { date: '2024-04', value: 425 }, { date: '2024-05', value: 420 }] },
          { fund: 'mutualfund', id: 8, fundName: 'Safe Harbor Fund', overallGrowth: 18.9, riskProfile: 'Low', returns: { oneYear: 7.0, threeYear: 19.5, fiveYear: 39.0 }, fundManager: 'Brian Evans', launchDate: '2019-01-20', aum: '₹300 Cr', fundType: 'Conservative', growthData: [{ date: '2024-01', value: 90 }, { date: '2024-02', value: 91 }, { date: '2024-03', value: 95 }, { date: '2024-04', value: 93 }, { date: '2024-05', value: 97 }] },
          { fund: 'mutualfund', id: 9, fundName: 'Bright Future Fund', overallGrowth: 42.1, riskProfile: 'High', returns: { oneYear: 19.0, threeYear: 52.0, fiveYear: 89.3 }, fundManager: 'Olivia Taylor', launchDate: '2015-09-14', aum: '₹750 Cr', fundType: 'Growth', growthData: [{ date: '2024-01', value: 280 }, { date: '2024-02', value: 275 }, { date: '2024-03', value: 290 }, { date: '2024-04', value: 300 }, { date: '2024-05', value: 285 }] },
          { fund: 'mutualfund', id: 10, fundName: 'Infinity Wealth Fund', overallGrowth: 37.5, riskProfile: 'Moderate', returns: { oneYear: 16.0, threeYear: 45.0, fiveYear: 80.5 }, fundManager: 'William King', launchDate: '2016-12-01', aum: '₹630 Cr', fundType: 'Flexi Cap', growthData: [{ date: '2024-01', value: 230 }, { date: '2024-02', value: 240 }, { date: '2024-03', value: 232 }, { date: '2024-04', value: 250 }, { date: '2024-05', value: 245 }] }
        ],
        
        
    
        SipFunds : [
          {fund:'sip',id:11,fundName:'Safe SIP Plan',overallGrowth:15.0,riskProfile:'Low',returns:{oneYear:7.5,threeYear:20.2,fiveYear:40.8},fundManager:'Sarah Johnson',launchDate:'2018-09-10',aum:'₹200 Cr',fundType:'Debt',growthData:[{date:'2024-01',value:50},{date:'2024-02',value:52},{date:'2024-03',value:49},{date:'2024-04',value:54},{date:'2024-05',value:51}]},
          {fund:'sip',id:12,fundName:'Monthly Wealth SIP',overallGrowth:22.5,riskProfile:'Moderate',returns:{oneYear:10.2,threeYear:28.5,fiveYear:55.0},fundManager:'Chris Brown',launchDate:'2017-03-05',aum:'₹400 Cr',fundType:'Hybrid',growthData:[{date:'2024-01',value:130},{date:'2024-02',value:128},{date:'2024-03',value:135},{date:'2024-04',value:132},{date:'2024-05',value:140}]},
          {fund:'sip',id:13,fundName:'Steady Growth SIP',overallGrowth:19.7,riskProfile:'Low',returns:{oneYear:8.5,threeYear:24.0,fiveYear:45.2},fundManager:'Eva Green',launchDate:'2019-07-21',aum:'₹350 Cr',fundType:'Debt',growthData:[{date:'2024-01',value:70},{date:'2024-02',value:72},{date:'2024-03',value:70},{date:'2024-04',value:75},{date:'2024-05',value:74}]},
          {fund:'sip',id:14,fundName:'Smart Investor SIP',overallGrowth:30.1,riskProfile:'Moderate',returns:{oneYear:13.5,threeYear:35.2,fiveYear:60.7},fundManager:'Jason Lee',launchDate:'2015-12-11',aum:'₹420 Cr',fundType:'Multi Cap',growthData:[{date:'2024-01',value:150},{date:'2024-02',value:145},{date:'2024-03',value:160},{date:'2024-04',value:155},{date:'2024-05',value:165}]},
          {fund:'sip',id:15,fundName:'Young Achievers SIP',overallGrowth:24.3,riskProfile:'High',returns:{oneYear:11.2,threeYear:30.0,fiveYear:58.5},fundManager:'Laura Knight',launchDate:'2016-02-23',aum:'₹480 Cr',fundType:'Equity',growthData:[{date:'2024-01',value:100},{date:'2024-02',value:97},{date:'2024-03',value:105},{date:'2024-04',value:102},{date:'2024-05',value:110}]},
          {fund:'sip',id:16,fundName:'Secure Start SIP',overallGrowth:17.9,riskProfile:'Low',returns:{oneYear:7.2,threeYear:18.5,fiveYear:36.0},fundManager:'Liam Scott',launchDate:'2020-05-15',aum:'₹250 Cr',fundType:'Debt',growthData:[{date:'2024-01',value:90},{date:'2024-02',value:88},{date:'2024-03',value:91},{date:'2024-04',value:89},{date:'2024-05',value:93}]},
          {fund:'sip',id:17,fundName:'Golden Harvest SIP',overallGrowth:27.8,riskProfile:'Moderate',returns:{oneYear:12.0,threeYear:33.0,fiveYear:65.0},fundManager:'Nora Adams',launchDate:'2018-01-09',aum:'₹520 Cr',fundType:'Flexi Cap',growthData:[{date:'2024-01',value:180},{date:'2024-02',value:175},{date:'2024-03',value:185},{date:'2024-04',value:183},{date:'2024-05',value:190}]},
          {fund:'sip',id:18,fundName:'Growth Partner SIP',overallGrowth:28.6,riskProfile:'High',returns:{oneYear:13.0,threeYear:34.8,fiveYear:60.1},fundManager:'Sophie Turner',launchDate:'2017-04-14',aum:'₹460 Cr',fundType:'Equity',growthData:[{date:'2024-01',value:140},{date:'2024-02',value:135},{date:'2024-03',value:145},{date:'2024-04',value:142},{date:'2024-05',value:150}]},
          {fund:'sip',id:19,fundName:'Safe Hands SIP',overallGrowth:16.7,riskProfile:'Low',returns:{oneYear:6.5,threeYear:17.0,fiveYear:34.2},fundManager:'Henry Watts',launchDate:'2020-07-19',aum:'₹300 Cr',fundType:'Debt',growthData:[{date:'2024-01',value:60},{date:'2024-02',value:59},{date:'2024-03',value:62},{date:'2024-04',value:60},{date:'2024-05',value:63}]},
          {fund:'sip',id:20,fundName:'Elite Wealth SIP',overallGrowth:40.5,riskProfile:'High',returns:{oneYear:18.2,threeYear:48.0,fiveYear:85.0},fundManager:'Henry Reed',launchDate:'2016-10-13',aum:'₹680 Cr',fundType:'Equity',growthData:[{date:'2024-01',value:320},{date:'2024-02',value:315},{date:'2024-03',value:325},{date:'2024-04',value:322},{date:'2024-05',value:335}]},
          {fund:'sip',id:21,fundName:'Investor Choice SIP',overallGrowth:23.5,riskProfile:'Moderate',returns:{oneYear:10.5,threeYear:27.2,fiveYear:52.3},fundManager:'Daniel Craig',launchDate:'2016-10-30',aum:'₹380 Cr',fundType:'Balanced',growthData:[{date:'2024-01',value:120},{date:'2024-02',value:118},{date:'2024-03',value:125},{date:'2024-04',value:122},{date:'2024-05',value:128}]}
        ],
        
        
        Bonds : [
          {fund:'bonds',id:11,fundName:'Safe Corporate Bond',overallGrowth:12.0,riskProfile:'Low',returns:{oneYear:6.2,threeYear:18.5,fiveYear:32.0},fundManager:'Lily Brown',launchDate:'2015-06-10',aum:'₹400 Cr',fundType:'Corporate Bond',growthData:[{date:'2024-01',value:100},{date:'2024-02',value:101},{date:'2024-03',value:98},{date:'2024-04',value:104},{date:'2024-05',value:102}]},
          {fund:'bonds',id:12,fundName:'Government Securities Bond',overallGrowth:10.5,riskProfile:'Low',returns:{oneYear:5.5,threeYear:16.2,fiveYear:28.0},fundManager:'Ethan Moore',launchDate:'2013-09-05',aum:'₹600 Cr',fundType:'G-Sec',growthData:[{date:'2024-01',value:200},{date:'2024-02',value:198},{date:'2024-03',value:203},{date:'2024-04',value:201},{date:'2024-05',value:207}]},
          {fund:'bonds',id:13,fundName:'Municipal Bond Fund',overallGrowth:11.8,riskProfile:'Low',returns:{oneYear:6.0,threeYear:17.5,fiveYear:30.5},fundManager:'Grace Davis',launchDate:'2017-02-19',aum:'₹300 Cr',fundType:'Municipal',growthData:[{date:'2024-01',value:150},{date:'2024-02',value:153},{date:'2024-03',value:149},{date:'2024-04',value:155},{date:'2024-05',value:152}]},
          {fund:'bonds',id:14,fundName:'Liquid Short-Term Bond',overallGrowth:9.5,riskProfile:'Low',returns:{oneYear:4.8,threeYear:14.2,fiveYear:25.0},fundManager:'Leo Hall',launchDate:'2019-05-20',aum:'₹200 Cr',fundType:'Liquid',growthData:[{date:'2024-01',value:50},{date:'2024-02',value:52},{date:'2024-03',value:51},{date:'2024-04',value:54},{date:'2024-05',value:53}]},
          {fund:'bonds',id:15,fundName:'Dynamic Bond Fund',overallGrowth:14.2,riskProfile:'Moderate',returns:{oneYear:7.2,threeYear:20.0,fiveYear:35.5},fundManager:'Mia Allen',launchDate:'2016-12-30',aum:'₹550 Cr',fundType:'Dynamic',growthData:[{date:'2024-01',value:180},{date:'2024-02',value:183},{date:'2024-03',value:181},{date:'2024-04',value:187},{date:'2024-05',value:190}]},
          {fund:'bonds',id:16,fundName:'Short Duration Bond',overallGrowth:13.5,riskProfile:'Moderate',returns:{oneYear:6.8,threeYear:19.0,fiveYear:34.2},fundManager:'Olivia Stewart',launchDate:'2018-08-08',aum:'₹370 Cr',fundType:'Short Duration',growthData:[{date:'2024-01',value:90},{date:'2024-02',value:89},{date:'2024-03',value:91},{date:'2024-04',value:93},{date:'2024-05',value:92}]},
          {fund:'bonds',id:17,fundName:'Credit Risk Bond',overallGrowth:16.0,riskProfile:'High',returns:{oneYear:8.5,threeYear:22.5,fiveYear:39.0},fundManager:'Daniel Young',launchDate:'2015-11-11',aum:'₹450 Cr',fundType:'Credit Risk',growthData:[{date:'2024-01',value:210},{date:'2024-02',value:212},{date:'2024-03',value:209},{date:'2024-04',value:215},{date:'2024-05',value:217}]},
          {fund:'bonds',id:18,fundName:'Ultra Short-Term Bond',overallGrowth:9.0,riskProfile:'Low',returns:{oneYear:4.5,threeYear:13.0,fiveYear:23.0},fundManager:'Sophia Hill',launchDate:'2020-03-18',aum:'₹210 Cr',fundType:'Ultra Short',growthData:[{date:'2024-01',value:30},{date:'2024-02',value:29},{date:'2024-03',value:31},{date:'2024-04',value:32},{date:'2024-05',value:30}]},
          {fund:'bonds',id:19,fundName:'Floating Rate Bond',overallGrowth:10.0,riskProfile:'Low',returns:{oneYear:5.0,threeYear:15.0,fiveYear:27.0},fundManager:'Liam Wright',launchDate:'2017-06-15',aum:'₹390 Cr',fundType:'Floating Rate',growthData:[{date:'2024-01',value:70},{date:'2024-02',value:72},{date:'2024-03',value:71},{date:'2024-04',value:73},{date:'2024-05',value:75}]},
          {fund:'bonds',id:20,fundName:'Income Opportunities Bond',overallGrowth:13.0,riskProfile:'Moderate',returns:{oneYear:6.5,threeYear:18.0,fiveYear:32.5},fundManager:'Noah Lewis',launchDate:'2016-04-25',aum:'₹500 Cr',fundType:'Income',growthData:[{date:'2024-01',value:110},{date:'2024-02',value:111},{date:'2024-03',value:113},{date:'2024-04',value:112},{date:'2024-05',value:115}]}
        ]
        
      },
      riskList : [
        {name: "All" , value : "All"},
        {name: "High" , value : "High"},
        {name: "Moderate" , value : "Moderate"},
        {name: "Low" , value : "Low"},
      ],
      FundTypeList : [ 
        { name: "Mutual Funds" , value: "mutualFunds"},
        { name: "Sip Funds" , value: "SipFunds"},
        { name: "Bonds" , value: "Bonds"},
      ],

      selectedFund :  { id: 11, fundName: 'Safe Corporate Bond', overallGrowth: 12.0, riskProfile: 'Low', returns: { oneYear: 6.2, threeYear: 18.5, fiveYear: 32.0 }, fundManager: 'Lily Brown', launchDate: '2015-06-10', aum: '₹400 Cr', fundType: 'Corporate Bond', growthData: [ { date: '2024-01', value: 100 }, { date: '2024-02', value: 102 }, { date: '2024-03', value: 104 }, { date: '2024-04', value: 106 }, { date: '2024-05', value: 108 } ] },
  
    }

    this.loans = {
      loanData : [
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
      ],
     
      status :[
        {name: "Approved", value : "Approved"},
        {name: "Pending", value : "Pending"},
        {name: "Rejected", value : "Rejected"},
  
      ]
    }

    this.transactions = {
      transactionData :[
        {
            transactionId: 'TXN001',
            transactionDate: '2025-04-25',
            transactionAmount: 5000,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Northern',
            branch: 'Delhi Branch',
            transactionMode: 'Online',
            description: 'Salary Deposit'
        },
        {
            transactionId: 'TXN002',
            transactionDate: '2025-04-26',
            transactionAmount: 2000,
            transactionStatus: 'Completed',
            transactionType: 'Withdrawal',
            region: 'Southern',
            branch: 'Chennai Branch',
            transactionMode: 'In-Branch',
            description: 'ATM Withdrawal'
        },
        {
            transactionId: 'TXN003',
            transactionDate: '2025-04-27',
            transactionAmount: 1500,
            transactionStatus: 'Pending',
            transactionType: 'Transfer',
            region: 'Western',
            branch: 'Mumbai Main Branch',
            transactionMode: 'Online',
            description: 'Payment to Vendor'
        },
        {
            transactionId: 'TXN004',
            transactionDate: '2025-04-28',
            transactionAmount: 3000,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Southern',
            branch: 'Hyderabad Branch',
            transactionMode: 'Mobile App',
            description: 'Customer Payment'
        },
        {
            transactionId: 'TXN005',
            transactionDate: '2025-04-29',
            transactionAmount: 1200,
            transactionStatus: 'Failed',
            transactionType: 'Withdrawal',
            region: 'Northern',
            branch: 'Delhi Branch',
            transactionMode: 'ATM',
            description: 'ATM Withdrawal Failed'
        },
        {
            transactionId: 'TXN006',
            transactionDate: '2025-04-30',
            transactionAmount: 2500,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Southern',
            branch: 'Bangalore Branch',
            transactionMode: 'Online',
            description: 'Monthly Deposit'
        },
        {
            transactionId: 'TXN007',
            transactionDate: '2025-05-01',
            transactionAmount: 700,
            transactionStatus: 'Completed',
            transactionType: 'Withdrawal',
            region: 'Southern',
            branch: 'Hyderabad Branch',
            transactionMode: 'In-Branch',
            description: 'Cash Withdrawal'
        },
        {
            transactionId: 'TXN008',
            transactionDate: '2025-05-02',
            transactionAmount: 1500,
            transactionStatus: 'Completed',
            transactionType: 'Transfer',
            region: 'Northern',
            branch: 'Mumbai Main Branch',
            transactionMode: 'ATM',
            description: 'Fund Transfer'
        },
        {
            transactionId: 'TXN009',
            transactionDate: '2025-05-03',
            transactionAmount: 4000,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Southern',
            branch: 'Hyderabad Branch',
            transactionMode: 'Online',
            description: 'Salary Deposit'
        },
        {
            transactionId: 'TXN010',
            transactionDate: '2025-05-04',
            transactionAmount: 1000,
            transactionStatus: 'Failed',
            transactionType: 'Withdrawal',
            region: 'Western',
            branch: 'Chennai Branch',
            transactionMode: 'ATM',
            description: 'Failed Withdrawal'
        },
        {
            transactionId: 'TXN011',
            transactionDate: '2025-05-05',
            transactionAmount: 2500,
            transactionStatus: 'Completed',
            transactionType: 'Transfer',
            region: 'Northern',
            branch: 'Delhi Branch',
            transactionMode: 'In-Branch',
            description: 'Vendor Payment'
        },
        {
            transactionId: 'TXN012',
            transactionDate: '2025-05-06',
            transactionAmount: 3000,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Southern',
            branch: 'Bangalore Branch',
            transactionMode: 'Online',
            description: 'Customer Deposit'
        },
        {
            transactionId: 'TXN013',
            transactionDate: '2025-05-07',
            transactionAmount: 1800,
            transactionStatus: 'Pending',
            transactionType: 'Transfer',
            region: 'Western',
            branch: 'Pune Branch',
            transactionMode: 'ATM',
            description: 'Bank Transfer'
        },
        {
            transactionId: 'TXN014',
            transactionDate: '2025-05-08',
            transactionAmount: 2200,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Northern',
            branch: 'Delhi Branch',
            transactionMode: 'Online',
            description: 'Payment Receipt'
        },
        {
            transactionId: 'TXN015',
            transactionDate: '2025-05-09',
            transactionAmount: 1300,
            transactionStatus: 'Completed',
            transactionType: 'Withdrawal',
            region: 'Southern',
            branch: 'Hyderabad Branch',
            transactionMode: 'In-Branch',
            description: 'Cash Withdrawal'
        },
        {
            transactionId: 'TXN016',
            transactionDate: '2025-05-10',
            transactionAmount: 2900,
            transactionStatus: 'Completed',
            transactionType: 'Transfer',
            region: 'Western',
            branch: 'Mumbai Main Branch',
            transactionMode: 'ATM',
            description: 'Funds Transfer'
        },
        {
            transactionId: 'TXN017',
            transactionDate: '2025-05-11',
            transactionAmount: 3200,
            transactionStatus: 'Failed',
            transactionType: 'Deposit',
            region: 'Northern',
            branch: 'Delhi Branch',
            transactionMode: 'In-Branch',
            description: 'Deposit Failed'
        },
        {
            transactionId: 'TXN018',
            transactionDate: '2025-05-12',
            transactionAmount: 2200,
            transactionStatus: 'Completed',
            transactionType: 'Transfer',
            region: 'Southern',
            branch: 'Bangalore Branch',
            transactionMode: 'Online',
            description: 'Vendor Payment'
        },
        {
            transactionId: 'TXN019',
            transactionDate: '2025-05-13',
            transactionAmount: 1600,
            transactionStatus: 'Completed',
            transactionType: 'Withdrawal',
            region: 'Western',
            branch: 'Chennai Branch',
            transactionMode: 'ATM',
            description: 'Cash Withdrawal'
        },
        {
            transactionId: 'TXN020',
            transactionDate: '2025-05-14',
            transactionAmount: 2300,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Northern',
            branch: 'Mumbai Main Branch',
            transactionMode: 'In-Branch',
            description: 'Deposit'
        },
        {
            transactionId: 'TXN021',
            transactionDate: '2025-05-15',
            transactionAmount: 1700,
            transactionStatus: 'Pending',
            transactionType: 'Transfer',
            region: 'Southern',
            branch: 'Bangalore Branch',
            transactionMode: 'ATM',
            description: 'Bank Transfer'
        },
        {
            transactionId: 'TXN022',
            transactionDate: '2025-05-16',
            transactionAmount: 3300,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Western',
            branch: 'Hyderabad Branch',
            transactionMode: 'Online',
            description: 'Deposit from Client'
        },
        {
            transactionId: 'TXN023',
            transactionDate: '2025-05-17',
            transactionAmount: 2700,
            transactionStatus: 'Completed',
            transactionType: 'Withdrawal',
            region: 'Northern',
            branch: 'Delhi Branch',
            transactionMode: 'In-Branch',
            description: 'Cash Withdrawal'
        },
        {
            transactionId: 'TXN024',
            transactionDate: '2025-05-18',
            transactionAmount: 1200,
            transactionStatus: 'Failed',
            transactionType: 'Deposit',
            region: 'Southern',
            branch: 'Chennai Branch',
            transactionMode: 'ATM',
            description: 'ATM Deposit Failed'
        },
        {
            transactionId: 'TXN025',
            transactionDate: '2025-05-19',
            transactionAmount: 1800,
            transactionStatus: 'Completed',
            transactionType: 'Transfer',
            region: 'Western',
            branch: 'Pune Branch',
            transactionMode: 'Online',
            description: 'Vendor Transfer'
        },
        {
            transactionId: 'TXN026',
            transactionDate: '2025-05-20',
            transactionAmount: 1500,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Northern',
            branch: 'Mumbai Main Branch',
            transactionMode: 'ATM',
            description: 'Deposit'
        },
        {
            transactionId: 'TXN027',
            transactionDate: '2025-05-21',
            transactionAmount: 2100,
            transactionStatus: 'Pending',
            transactionType: 'Transfer',
            region: 'Southern',
            branch: 'Hyderabad Branch',
            transactionMode: 'In-Branch',
            description: 'Bank Transfer'
        },
        {
            transactionId: 'TXN028',
            transactionDate: '2025-05-22',
            transactionAmount: 3000,
            transactionStatus: 'Completed',
            transactionType: 'Deposit',
            region: 'Western',
            branch: 'Chennai Branch',
            transactionMode: 'Online',
            description: 'Client Deposit'
        },
        {
            transactionId: 'TXN029',
            transactionDate: '2025-05-23',
            transactionAmount: 2200,
            transactionStatus: 'Completed',
            transactionType: 'Withdrawal',
            region: 'Northern',
            branch: 'Pune Branch',
            transactionMode: 'ATM',
            description: 'Cash Withdrawal'
        },
        {
            transactionId: 'TXN030',
            transactionDate: '2025-05-24',
            transactionAmount: 3200,
            transactionStatus: 'Completed',
            transactionType: 'Transfer',
            region: 'Southern',
            branch: 'Bangalore Branch',
            transactionMode: 'In-Branch',
            description: 'Transfer to Account'
        }
    ],

    status : [
      { name: 'All', value: 'All' },
      {name: "Completed" , value : "Completed"},
      {name: "Pending" , value : "Pending"},
      {name: "Failed" , value : "Failed"},
    ]

    }
  }


//Functions

AddNewAccount( newAccount : any){

  this.accounts.accountData.push(newAccount);
  this.accounts.accountData = [...this.accounts.accountData];
}

editAccount(index :any , Accountinfo: any){
  this.accounts.accountData[index] = Accountinfo;
}

deleteAccount(index : any){
  this.accounts.accountData = this.accounts.accountData.filter((account: { customerId: any; }) => account.customerId !== index);

}

}
