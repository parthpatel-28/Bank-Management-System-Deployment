import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  selectedBranch: any= 1;
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  transactionData : any[];
  branches : any [];
  status : any[];
  statusName : any =1;
  regionData: any;
  transactionModeData: any;
  transactionDataMain : any[];
  cards2 = ['Card 1', 'Card 2',  'Card 3' ];

  constructor(
    private DataService : DataService,
  ) { 

    this.status = DataService.transactions.status
   
    this.branches = DataService.global.branches;

    this.transactionData = DataService.transactions.transactionData;

    this.transactionDataMain = this.transactionData;
  

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

  Click_Search(value : any){
    this.transactionData = this.transactionDataMain;
  
    if(this.selectedBranch.branchName != "All" && this.selectedBranch != 1){
      this.transactionData  = this.transactionData.filter(account => account.branch === this.selectedBranch.branchName);
    }

    if(this.statusName.value != "All" && this.statusName != 1){
      this.transactionData  = this.transactionData.filter(account => account.transactionStatus === this.statusName.value);
    }

    this.processTransactionModeData();

  }

  Click_Reset(){
    this.transactionData = this.transactionDataMain;
    this.statusName = 1;
    this.selectedBranch = 1;
    this.processTransactionModeData();
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
