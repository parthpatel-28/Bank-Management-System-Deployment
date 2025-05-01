import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  cities: any[];
  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  mutualFunds : any[];
  SipFunds : any[];
  Bonds : any[];
  priorityList : any[];
  priority : any;
  FundTypeList : any[];
  FundType: any;

  
  constructor(
    private DataService :DataService,
  ) { 
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.priorityList = DataService.funds.priorityList;
    this.mutualFunds = DataService.funds.fundsData.mutualFunds;
    this.SipFunds = DataService.funds.fundsData.SipFunds;
    this.Bonds =  DataService.funds.fundsData.Bonds;
    this.FundTypeList = DataService.funds.FundTypeList
  
  }

  
  
  ngOnInit(): void {
    this.pieChartData = {
      labels: ['CSBS', 'Civil', 'Mechanical'],
      datasets: [
        {
          data: [4, 2,2], // just sample counts
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D']
        }
      ]
    };


  }
}
