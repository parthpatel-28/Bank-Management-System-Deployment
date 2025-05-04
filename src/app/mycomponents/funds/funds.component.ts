import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {


  data: any[] =[];
  lineChartData : any;
  lineChartOptions: any;
  barChartData : any;
  barChartOptions : any;

  mutualFunds : any[];
  SipFunds : any[];
  Bonds : any[];
  mutualFundsMain : any[];
  SipFundsMain : any[];
  BondsMain : any[];

  riskList : any[];
  risk : any = 1;
  FundTypeList : any[];
  FundType: any;
  Fundname : any;

  display = false;
  selectedFund : any;

  cards1 = ['Card 1', 'Card 2', 'Card 3'];
 

  constructor(
    private DataService :DataService,
  ) { 
  
    this.riskList = DataService.funds.riskList;
    this.mutualFunds = DataService.funds.fundsData.mutualFunds;
    this.SipFunds = DataService.funds.fundsData.SipFunds;
    this.Bonds =  DataService.funds.fundsData.Bonds;
    this.FundTypeList = DataService.funds.FundTypeList
    this.selectedFund = DataService.funds.selectedFund;


    this.mutualFundsMain = this.mutualFunds;
    this.SipFundsMain = this.SipFunds;
    this.BondsMain =  this.Bonds;
  
  }

  
  
  ngOnInit(): void {
    // this.pieChartData = {
    //   labels: ['CSBS', 'Civil', 'Mechanical'],
    //   datasets: [
    //     {
    //       data: [4, 2,2], // just sample counts
    //       backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
    //       hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D']
    //     }
    //   ]
    // };
  }


  Click_Search(value : any){
    this.Bonds = this.BondsMain;
    this.mutualFunds =this.mutualFundsMain;
    this.SipFunds = this.SipFundsMain;

    console.log(this.risk);
    if(this.risk.value != "All" && this.risk != 1){
      this.Bonds  = this.Bonds.filter(account => account.riskProfile === this.risk.value);
    }
    if(this.risk.value != "All" && this.risk != 1){
      this.mutualFunds  = this.mutualFunds.filter(account => account.riskProfile === this.risk.value);
    }
    if(this.risk.value != "All" && this.risk != 1){
      this.SipFunds  = this.SipFunds.filter(account => account.riskProfile === this.risk.value);
    }
  }


  Click_Reset(){
    this.Bonds = this.BondsMain;
    this.mutualFunds =this.mutualFundsMain;
    this.SipFunds = this.SipFundsMain;
    this.risk = 1;
  }

  displayData(value : number , type : string){
   this.display= true;
   console.log(value , type);
   if(type == "bonds"){
    const fund = this.Bonds.filter(account => account.id == value );
    this.selectedFund = fund[0]; 
   }else{
    const fund = this.mutualFunds.filter(account => account.id == value );
    this.selectedFund = fund[0]; 
   }

   if(type == "sip"){
    const fund = this.SipFunds.filter(account => account.id == value );
    this.selectedFund = fund[0]; 
   }
   console.log(this.selectedFund);
   this.updateGrowthChart();
   this.setupBarChart();
  }

  updateGrowthChart(): void {
    if (!this.selectedFund?.growthData?.length) {
      this.lineChartData = { labels: [], datasets: [] };
      return;
    }

    const labels = this.selectedFund.growthData.map((pt: any) => pt.date);
    const data   = this.selectedFund.growthData.map((pt: any) => pt.value);

    this.lineChartData = {
      labels,
      datasets: [
        {
          label: 'Recent Fund Growth',
          data,
          fill: false,
          borderColor: '#3B6978',
          tension: 0.4,
          borderWidth: 2
        }
      ]
    };

    this.lineChartOptions = {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top' }
        
      },
      scales: {
        x: { title: { display: true, text: 'Month' } },
        y: {
          title: { display: true, text: 'Value' },
          beginAtZero: false
        }
      }
    };
  }
  setupBarChart(): void {
    if (!this.selectedFund || !this.selectedFund.returns) {
      console.warn('selectedFund or returns not available');
      return;
    }
  
    this.barChartData = {
      labels: ['1 Year', '3 Year', '5 Year'],
      datasets: [
        {
          label: "Overall Growth",
          backgroundColor: ['#3B6978', '#204051', '#D9E4E6'],
          data: [
            this.selectedFund.returns.oneYear,
            this.selectedFund.returns.threeYear,
            this.selectedFund.returns.fiveYear
          ]
        }
      ]
    };
  
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Return (%)'
          }
        }
      }
    };
  }
}

