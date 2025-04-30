import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  transactionData : any[];
  branches : any [];
  status : any[];
  statusName : any;
  regionData: any;
  transactionModeData: any;
  cards2 = ['Card 1', 'Card 2',  'Card 3' ];

  constructor() { 

    this.status = [
      {name: "Completed" , value : "Completed"},
      {name: "Pending" , value : "Pending"},
      {name: "Failed" , value : "Failed"},
    ]

    this.branches = [
      { branchId: 'BR001', branchName: 'Mumbai Main Branch', location: 'Mumbai', region: 'Western' },
      { branchId: 'BR002', branchName: 'Delhi Branch', location: 'Delhi', region: 'Northern' },
      { branchId: 'BR003', branchName: 'Chennai Branch', location: 'Chennai', region: 'Southern' },
      { branchId: 'BR004', branchName: 'Pune Branch', location: 'Pune', region: 'Western' },
      { branchId: 'BR005', branchName: 'Bangalore Branch', location: 'Bangalore', region: 'Southern' },
      { branchId: 'BR006', branchName: 'Hyderabad Branch', location: 'Hyderabad', region: 'Southern' }
    ];


    this.transactionData = [
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
  ];
  

  }


  
  ngOnInit(): void {
    this.processRegionData();
    this.processTransactionModeData();
  }


  processRegionData() {
    const regionCounts = this.transactionData.reduce((acc, curr) => {
      acc[curr.region] = (acc[curr.region] || 0) + 1;
      return acc;
    }, {});
    console.log("regionCounts: ",regionCounts);

    this.regionData = {
      labels: Object.keys(regionCounts),
      datasets: [
        {
          data: Object.values(regionCounts),
          backgroundColor: ['#E07A5F', '#F4F1BB', '#81B29A', '#D9BF77'], // Warm muted reds, yellows, and greens
          hoverBackgroundColor: ['#F2A98C', '#D7D6A1', '#A7C6B5', '#E8D06B'] // Hover colors
        }
      ]
    };
  }

  processTransactionModeData() {
    const modeCounts = this.transactionData.reduce((acc, curr) => {
      acc[curr.transactionMode] = (acc[curr.transactionMode] || 0) + 1;
      return acc;
    }, {});

    console.log("modeCounts",modeCounts);

    this.transactionModeData = {
      labels: Object.keys(modeCounts),
      datasets: [
        {
          data: Object.values(modeCounts),
          backgroundColor: ['#3B6978', '#204051', '#D9E4E6', '#F2A65A'], // Muted blues, beige, and warm tones
          hoverBackgroundColor: ['#2A4D56', '#1A2A35', '#D9E4E6', '#E39D3B'] // Hover colors
        }
      ]
    };
  }


     exportToExcel(): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.transactionData);
        const workbook: XLSX.WorkBook = {
          Sheets: { 'Transactions Data': worksheet },
          SheetNames: ['Transactions Data']
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
          case "Completed":
            return '#5cb89e'; // Gentle green
          case "Pending":
            return '#dda45a'; // Warm amber
          case "Closed":
            return '#a1a1a1'; // Soft neutral gray
          case "Failed":
            return '#d46b6b'; // Muted red
          default:
            return '#cccccc'; // Fallback gray
        }
    }





}
