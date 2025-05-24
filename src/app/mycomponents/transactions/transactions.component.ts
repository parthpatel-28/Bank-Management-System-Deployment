import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DataService } from 'src/app/services/data.service';
import { MessageService } from 'primeng/api';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  providers: [MessageService] 
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
    private messageService: MessageService,
    private clipboard: Clipboard
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

  showSuccess(value : string) {
    this.messageService.add({
      key: 'success',
      severity: 'success',
      summary: 'Done!',
      detail: value,
      life: 3000, 
    });
  }

  processRegionData() {
    const regionCounts = this.transactionData.reduce((acc, curr) => {
      acc[curr.transactionType] = (acc[curr.transactionType] || 0) + 1;
      return acc;
    }, {});
    console.log("regionCounts: ",regionCounts);

    this.regionData = {
      labels: Object.keys(regionCounts),
      datasets: [
        {
          data: Object.values(regionCounts),
          backgroundColor: ['#3B6978', '#204051', '#D9E4E6', '#678D99', '#3B6978'], // Warm muted reds, yellows, and greens
          hoverBackgroundColor: ['#2A4D56', '#1A2A35', '#D9E4E6', '#4C6B74', '#2A4D56'] // Hover colors
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
          backgroundColor: ['#3B6978', '#204051', '#D9E4E6', '#678D99', '#3B6978'], // Warm muted reds, yellows, and greens
          hoverBackgroundColor: ['#2A4D56', '#1A2A35', '#D9E4E6', '#4C6B74', '#2A4D56'] // Hover colors
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
    this.processRegionData();

  }

  Click_Reset(){
    this.transactionData = this.transactionDataMain;
    this.statusName = 1;
    this.selectedBranch = 1;
    this.processTransactionModeData();
    this.processRegionData();
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

        this.showSuccess("Data Converted to Excelsheet successfully");
      }


      getColor(status: any) {
        switch (status) {
          case 'Failed':        // Rejected
            return { color: '#FF4D4F', backgroundColor: '#FFF1F0' };
          case 'Completed':       // Approved
            return { color: '#28C76F', backgroundColor: '#F2FBF5' };
          case 'Pending': // In Review
           return { color: '#E5A800', backgroundColor: '#FFFBE6' };
          default:
            return { color: '#6C757D', backgroundColor: '#F8F9FA' }; // N/A / Unknown
        }
    }


    copyToClipboard(Id : any){
       this.clipboard.copy(Id);
     this.showSuccess("Transaction ID Copied successfully");
    }


}
