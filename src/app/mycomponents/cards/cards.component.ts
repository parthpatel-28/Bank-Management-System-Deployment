import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  selectedBranch : any;
  cardType :any ;
  cardLevel :any ;
  cardData : any[];
  cardTypeList : any[];
  cardLevelList : any[];
  branches : any[];

  constructor() { 

    this.cardTypeList =[
      { name: "Debit" , label: "Debit Card"},
      { name: "Credit" , label: "Credit Card"},
    ];

    this.cardLevelList = [
      { name: "Gold" ,label: "Gold"},
      { name: "Platinum" ,label: "Platinum"},
      { name: "Silver" ,label: "Silver"},
    ];

    
    this.branches = [
      { branchId: 'BR001', branchName: 'Mumbai Main Branch', location: 'Mumbai', region: 'Western' },
      { branchId: 'BR002', branchName: 'Delhi Branch', location: 'Delhi', region: 'Northern' },
      { branchId: 'BR003', branchName: 'Chennai Branch', location: 'Chennai', region: 'Southern' },
      { branchId: 'BR004', branchName: 'Pune Branch', location: 'Pune', region: 'Western' },
      { branchId: 'BR005', branchName: 'Bangalore Branch', location: 'Bangalore', region: 'Southern' },
      { branchId: 'BR006', branchName: 'Hyderabad Branch', location: 'Hyderabad', region: 'Southern' }
    ];
    

    this.cardData = [
      {
        customerId: 'CUST001',
        cardNumber: '4539 1488 0343 6467',
        validFrom: '2023-01-01',
        validTill: '2028-01-01',
        dateOfIssue: '2023-01-01',
        branch: 'Mumbai Main Branch',
        pin: '1234',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '123',
        cardStatus: 'Active',
        dailyLimit: 50000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST002',
        cardNumber: '4716 5210 0000 0000',
        validFrom: '2022-06-15',
        validTill: '2027-06-15',
        dateOfIssue: '2022-06-15',
        branch: 'Delhi Branch',
        pin: '5678',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '456',
        cardStatus: 'Active',
        dailyLimit: 100000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST003',
        cardNumber: '4485 3647 3952 0891',
        validFrom: '2021-09-10',
        validTill: '2026-09-10',
        dateOfIssue: '2021-09-10',
        branch: 'Chennai Branch',
        pin: '6789',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '789',
        cardStatus: 'Inactive',
        dailyLimit: 30000,
        internationalUsageEnabled: false
      },
      {
        customerId: 'CUST004',
        cardNumber: '4556 7375 8689 9855',
        validFrom: '2020-05-25',
        validTill: '2025-05-25',
        dateOfIssue: '2020-05-25',
        branch: 'Pune Branch',
        pin: '3456',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '321',
        cardStatus: 'Active',
        dailyLimit: 70000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST005',
        cardNumber: '5424 1800 1234 5678',
        validFrom: '2022-11-30',
        validTill: '2027-11-30',
        dateOfIssue: '2022-11-30',
        branch: 'Bangalore Branch',
        pin: '9012',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '654',
        cardStatus: 'Active',
        dailyLimit: 60000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST006',
        cardNumber: '6011 0009 9013 9424',
        validFrom: '2023-02-10',
        validTill: '2028-02-10',
        dateOfIssue: '2023-02-10',
        branch: 'Hyderabad Branch',
        pin: '2345',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '987',
        cardStatus: 'Active',
        dailyLimit: 40000,
        internationalUsageEnabled: false
      },
      {
        customerId: 'CUST007',
        cardNumber: '3792 822463 10005',
        validFrom: '2022-06-15',
        validTill: '2027-06-15',
        dateOfIssue: '2022-06-15',
        branch: 'Mumbai Main Branch',
        pin: '6781',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '159',
        cardStatus: 'Active',
        dailyLimit: 80000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST008',
        cardNumber: '6011 1111 1111 1117',
        validFrom: '2023-01-05',
        validTill: '2028-01-05',
        dateOfIssue: '2023-01-05',
        branch: 'Delhi Branch',
        pin: '1456',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '753',
        cardStatus: 'Inactive',
        dailyLimit: 25000,
        internationalUsageEnabled: false
      },
      {
        customerId: 'CUST009',
        cardNumber: '5105 1051 0510 5100',
        validFrom: '2021-09-10',
        validTill: '2026-09-10',
        dateOfIssue: '2021-09-10',
        branch: 'Chennai Branch',
        pin: '7532',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '456',
        cardStatus: 'Active',
        dailyLimit: 90000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST010',
        cardNumber: '4111 1111 1111 1111',
        validFrom: '2020-05-25',
        validTill: '2025-05-25',
        dateOfIssue: '2020-05-25',
        branch: 'Pune Branch',
        pin: '5672',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '159',
        cardStatus: 'Active',
        dailyLimit: 50000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST011',
        cardNumber: '4000 0566 5566 5556',
        validFrom: '2022-11-30',
        validTill: '2027-11-30',
        dateOfIssue: '2022-11-30',
        branch: 'Bangalore Branch',
        pin: '1357',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '951',
        cardStatus: 'Active',
        dailyLimit: 45000,
        internationalUsageEnabled: false
      },
      {
        customerId: 'CUST012',
        cardNumber: '6011 1234 4321 1234',
        validFrom: '2023-02-10',
        validTill: '2028-02-10',
        dateOfIssue: '2023-02-10',
        branch: 'Hyderabad Branch',
        pin: '3579',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '753',
        cardStatus: 'Active',
        dailyLimit: 55000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST013',
        cardNumber: '3700 000000 00002',
        validFrom: '2020-03-18',
        validTill: '2025-03-18',
        dateOfIssue: '2020-03-18',
        branch: 'Mumbai Main Branch',
        pin: '9753',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '852',
        cardStatus: 'Inactive',
        dailyLimit: 20000,
        internationalUsageEnabled: false
      },
      {
        customerId: 'CUST014',
        cardNumber: '4111 4444 5555 6666',
        validFrom: '2021-06-01',
        validTill: '2026-06-01',
        dateOfIssue: '2021-06-01',
        branch: 'Chennai Branch',
        pin: '6547',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '147',
        cardStatus: 'Active',
        dailyLimit: 70000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST015',
        cardNumber: '5500 0000 0000 0004',
        validFrom: '2022-12-25',
        validTill: '2027-12-25',
        dateOfIssue: '2022-12-25',
        branch: 'Delhi Branch',
        pin: '3691',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '258',
        cardStatus: 'Active',
        dailyLimit: 95000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST016',
        cardNumber: '6011 2222 2222 2222',
        validFrom: '2020-10-15',
        validTill: '2025-10-15',
        dateOfIssue: '2020-10-15',
        branch: 'Pune Branch',
        pin: '2583',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '456',
        cardStatus: 'Active',
        dailyLimit: 60000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST017',
        cardNumber: '3530 1113 3330 0000',
        validFrom: '2021-07-20',
        validTill: '2026-07-20',
        dateOfIssue: '2021-07-20',
        branch: 'Bangalore Branch',
        pin: '7412',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '963',
        cardStatus: 'Inactive',
        dailyLimit: 35000,
        internationalUsageEnabled: false
      },
      {
        customerId: 'CUST018',
        cardNumber: '6011 5566 7788 9998',
        validFrom: '2022-08-13',
        validTill: '2027-08-13',
        dateOfIssue: '2022-08-13',
        branch: 'Hyderabad Branch',
        pin: '3697',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '789',
        cardStatus: 'Active',
        dailyLimit: 80000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST019',
        cardNumber: '4532 1111 1111 1113',
        validFrom: '2021-11-05',
        validTill: '2026-11-05',
        dateOfIssue: '2021-11-05',
        branch: 'Mumbai Main Branch',
        pin: '1478',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '321',
        cardStatus: 'Active',
        dailyLimit: 70000,
        internationalUsageEnabled: true
      },
      {
        customerId: 'CUST020',
        cardNumber: '4485 2312 2222 2222',
        validFrom: '2020-12-10',
        validTill: '2025-12-10',
        dateOfIssue: '2020-12-10',
        branch: 'Delhi Branch',
        pin: '7893',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '654',
        cardStatus: 'Inactive',
        dailyLimit: 20000,
        internationalUsageEnabled: false
      }
    ];
    

  }

  ngOnInit(): void {
  }

}
