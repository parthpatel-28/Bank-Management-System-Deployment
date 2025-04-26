import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

 
   selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  mutualFunds : any[];
  SipFunds : any[];
  Bonds : any[];
  accountNumber : any;
  FundTypeList : any[];
  FundType : any;
  constructor() { 


    this.FundTypeList = [ 
      { name: "Mutual Funds" , value: "mutualFunds"},
      { name: "Sip Funds" , value: "SipFunds"},
      { name: "Bonds" , value: "Bonds"},

    ];


    this.mutualFunds = [
      { id: 1, fundName: 'ABC Growth Fund', overallGrowth: 25.4, riskProfile: 'Moderate', returns: { oneYear: 12.5, threeYear: 38.2, fiveYear: 67.8 }, fundManager: 'John Doe', launchDate: '2015-06-01', AUM: '₹500 Cr', fundType: 'Large Cap', growthData: [ { date: '2024-01', value: 100 }, { date: '2024-02', value: 110 }, { date: '2024-03', value: 115 }, { date: '2024-04', value: 120 }, { date: '2024-05', value: 125 } ] },
      { id: 2, fundName: 'XYZ Equity Fund', overallGrowth: 40.7, riskProfile: 'High', returns: { oneYear: 18.3, threeYear: 50.2, fiveYear: 95.4 }, fundManager: 'Jane Smith', launchDate: '2012-04-15', AUM: '₹800 Cr', fundType: 'Mid Cap', growthData: [ { date: '2024-01', value: 200 }, { date: '2024-02', value: 210 }, { date: '2024-03', value: 220 }, { date: '2024-04', value: 230 }, { date: '2024-05', value: 240 } ] },
      { id: 3, fundName: 'Prime Value Fund', overallGrowth: 32.1, riskProfile: 'Moderate', returns: { oneYear: 14.5, threeYear: 40.1, fiveYear: 72.3 }, fundManager: 'Nina Patel', launchDate: '2016-07-10', AUM: '₹600 Cr', fundType: 'Balanced', growthData: [ { date: '2024-01', value: 120 }, { date: '2024-02', value: 125 }, { date: '2024-03', value: 130 }, { date: '2024-04', value: 140 }, { date: '2024-05', value: 150 } ] },
      { id: 4, fundName: 'Secure Wealth Fund', overallGrowth: 20.8, riskProfile: 'Low', returns: { oneYear: 8.5, threeYear: 24.1, fiveYear: 45.6 }, fundManager: 'Kevin Brown', launchDate: '2014-03-22', AUM: '₹700 Cr', fundType: 'Debt', growthData: [ { date: '2024-01', value: 300 }, { date: '2024-02', value: 310 }, { date: '2024-03', value: 320 }, { date: '2024-04', value: 330 }, { date: '2024-05', value: 340 } ] },
      { id: 5, fundName: 'Sunrise Opportunity Fund', overallGrowth: 50.2, riskProfile: 'High', returns: { oneYear: 22.5, threeYear: 60.0, fiveYear: 105.5 }, fundManager: 'Sara White', launchDate: '2018-11-30', AUM: '₹950 Cr', fundType: 'Small Cap', growthData: [ { date: '2024-01', value: 80 }, { date: '2024-02', value: 90 }, { date: '2024-03', value: 100 }, { date: '2024-04', value: 110 }, { date: '2024-05', value: 120 } ] },
      { id: 6, fundName: 'Vision Equity Fund', overallGrowth: 35.7, riskProfile: 'Moderate', returns: { oneYear: 15.2, threeYear: 42.3, fiveYear: 75.9 }, fundManager: 'David Green', launchDate: '2013-05-18', AUM: '₹550 Cr', fundType: 'Multi Cap', growthData: [ { date: '2024-01', value: 170 }, { date: '2024-02', value: 175 }, { date: '2024-03', value: 180 }, { date: '2024-04', value: 190 }, { date: '2024-05', value: 195 } ] },
      { id: 7, fundName: 'Elite Wealth Fund', overallGrowth: 45.5, riskProfile: 'High', returns: { oneYear: 20.5, threeYear: 55.1, fiveYear: 90.7 }, fundManager: 'Emma Wilson', launchDate: '2017-02-05', AUM: '₹670 Cr', fundType: 'Growth', growthData: [ { date: '2024-01', value: 400 }, { date: '2024-02', value: 420 }, { date: '2024-03', value: 430 }, { date: '2024-04', value: 440 }, { date: '2024-05', value: 450 } ] },
      { id: 8, fundName: 'Safe Harbor Fund', overallGrowth: 18.9, riskProfile: 'Low', returns: { oneYear: 7.0, threeYear: 19.5, fiveYear: 39.0 }, fundManager: 'Brian Evans', launchDate: '2019-01-20', AUM: '₹300 Cr', fundType: 'Conservative', growthData: [ { date: '2024-01', value: 90 }, { date: '2024-02', value: 92 }, { date: '2024-03', value: 94 }, { date: '2024-04', value: 96 }, { date: '2024-05', value: 98 } ] },
      { id: 9, fundName: 'Bright Future Fund', overallGrowth: 42.1, riskProfile: 'High', returns: { oneYear: 19.0, threeYear: 52.0, fiveYear: 89.3 }, fundManager: 'Olivia Taylor', launchDate: '2015-09-14', AUM: '₹750 Cr', fundType: 'Growth', growthData: [ { date: '2024-01', value: 280 }, { date: '2024-02', value: 290 }, { date: '2024-03', value: 300 }, { date: '2024-04', value: 310 }, { date: '2024-05', value: 320 } ] },
      { id: 10, fundName: 'Infinity Wealth Fund', overallGrowth: 37.5, riskProfile: 'Moderate', returns: { oneYear: 16.0, threeYear: 45.0, fiveYear: 80.5 }, fundManager: 'William King', launchDate: '2016-12-01', AUM: '₹630 Cr', fundType: 'Flexi Cap', growthData: [ { date: '2024-01', value: 230 }, { date: '2024-02', value: 235 }, { date: '2024-03', value: 240 }, { date: '2024-04', value: 250 }, { date: '2024-05', value: 260 } ] }
    ];

    this.SipFunds = [
      { id: 11, fundName: 'Safe SIP Plan', overallGrowth: 15.0, riskProfile: 'Low', returns: { oneYear: 7.5, threeYear: 20.2, fiveYear: 40.8 }, fundManager: 'Sarah Johnson', launchDate: '2018-09-10', AUM: '₹200 Cr', fundType: 'Debt', growthData: [ { date: '2024-01', value: 50 }, { date: '2024-02', value: 55 }, { date: '2024-03', value: 60 }, { date: '2024-04', value: 65 }, { date: '2024-05', value: 70 } ] },
      { id: 12, fundName: 'Monthly Wealth SIP', overallGrowth: 22.5, riskProfile: 'Moderate', returns: { oneYear: 10.2, threeYear: 28.5, fiveYear: 55.0 }, fundManager: 'Chris Brown', launchDate: '2017-03-05', AUM: '₹400 Cr', fundType: 'Hybrid', growthData: [ { date: '2024-01', value: 130 }, { date: '2024-02', value: 140 }, { date: '2024-03', value: 145 }, { date: '2024-04', value: 150 }, { date: '2024-05', value: 155 } ] },
      { id: 13, fundName: 'Steady Growth SIP', overallGrowth: 19.7, riskProfile: 'Low', returns: { oneYear: 8.5, threeYear: 24.0, fiveYear: 45.2 }, fundManager: 'Eva Green', launchDate: '2019-07-21', AUM: '₹350 Cr', fundType: 'Debt', growthData: [ { date: '2024-01', value: 70 }, { date: '2024-02', value: 72 }, { date: '2024-03', value: 75 }, { date: '2024-04', value: 78 }, { date: '2024-05', value: 80 } ] },
      { id: 14, fundName: 'Smart Investor SIP', overallGrowth: 30.1, riskProfile: 'Moderate', returns: { oneYear: 13.5, threeYear: 35.2, fiveYear: 60.7 }, fundManager: 'Jason Lee', launchDate: '2015-12-11', AUM: '₹420 Cr', fundType: 'Multi Cap', growthData: [ { date: '2024-01', value: 150 }, { date: '2024-02', value: 155 }, { date: '2024-03', value: 160 }, { date: '2024-04', value: 170 }, { date: '2024-05', value: 180 } ] },
      { id: 15, fundName: 'Young Achievers SIP', overallGrowth: 24.3, riskProfile: 'High', returns: { oneYear: 11.2, threeYear: 30.0, fiveYear: 58.5 }, fundManager: 'Laura Knight', launchDate: '2016-02-23', AUM: '₹480 Cr', fundType: 'Equity', growthData: [ { date: '2024-01', value: 100 }, { date: '2024-02', value: 105 }, { date: '2024-03', value: 110 }, { date: '2024-04', value: 115 }, { date: '2024-05', value: 120 } ] },
      { id: 16, fundName: 'Secure Start SIP', overallGrowth: 17.9, riskProfile: 'Low', returns: { oneYear: 7.2, threeYear: 18.5, fiveYear: 36.0 }, fundManager: 'Liam Scott', launchDate: '2020-05-15', AUM: '₹250 Cr', fundType: 'Debt', growthData: [ { date: '2024-01', value: 90 }, { date: '2024-02', value: 93 }, { date: '2024-03', value: 95 }, { date: '2024-04', value: 98 }, { date: '2024-05', value: 100 } ] },
      { id: 17, fundName: 'Golden Harvest SIP', overallGrowth: 27.8, riskProfile: 'Moderate', returns: { oneYear: 12.0, threeYear: 33.0, fiveYear: 65.0 }, fundManager: 'Nora Adams', launchDate: '2018-01-09', AUM: '₹520 Cr', fundType: 'Flexi Cap', growthData: [ { date: '2024-01', value: 180 }, { date: '2024-02', value: 185 }, { date: '2024-03', value: 190 }, { date: '2024-04', value: 200 }, { date: '2024-05', value: 210 } ] },
      { id: 18, fundName: 'Growth Partner SIP', overallGrowth: 28.6, riskProfile: 'High', returns: { oneYear: 13.0, threeYear: 34.8, fiveYear: 60.1 }, fundManager: 'Sophie Turner', launchDate: '2017-04-14', AUM: '₹460 Cr', fundType: 'Equity', growthData: [ { date: '2024-01', value: 140 }, { date: '2024-02', value: 145 }, { date: '2024-03', value: 150 }, { date: '2024-04', value: 155 }, { date: '2024-05', value: 160 } ] },
      { id: 19, fundName: 'Safe Hands SIP', overallGrowth: 16.7, riskProfile: 'Low', returns: { oneYear: 6.5, threeYear: 17.0, fiveYear: 34.2 }, fundManager: 'Henry Watts', launchDate: '2020-07-19', AUM: '₹300 Cr', fundType: 'Debt', growthData: [ { date: '2024-01', value: 60 }, { date: '2024-02', value: 62 }, { date: '2024-03', value: 65 }, { date: '2024-04', value: 68 }, { date: '2024-05', value: 70 } ] },
      { id: 20, fundName: 'Elite Wealth SIP', overallGrowth: 40.5, riskProfile: 'High', returns: { oneYear: 18.2, threeYear: 48.0, fiveYear: 85.0 }, fundManager: 'Henry Reed', launchDate: '2016-10-13', AUM: '₹680 Cr', fundType: 'Equity', growthData: [ { date: '2024-01', value: 320 }, { date: '2024-02', value: 330 }, { date: '2024-03', value: 340 }, { date: '2024-04', value: 350 }, { date: '2024-05', value: 360 } ] },
      { id: 21, fundName: 'Investor Choice SIP', overallGrowth: 23.5, riskProfile: 'Moderate', returns: { oneYear: 10.5, threeYear: 27.2, fiveYear: 52.3 }, fundManager: 'Daniel Craig', launchDate: '2016-10-30', AUM: '₹380 Cr', fundType: 'Balanced', growthData: [ { date: '2024-01', value: 120 }, { date: '2024-02', value: 122 }, { date: '2024-03', value: 125 }, { date: '2024-04', value: 130 }, { date: '2024-05', value: 135 } ] },
      
    ]
    
    this.Bonds = [
      { id: 11, fundName: 'Safe Corporate Bond', overallGrowth: 12.0, riskProfile: 'Low', returns: { oneYear: 6.2, threeYear: 18.5, fiveYear: 32.0 }, fundManager: 'Lily Brown', launchDate: '2015-06-10', AUM: '₹400 Cr', fundType: 'Corporate Bond', growthData: [ { date: '2024-01', value: 100 }, { date: '2024-02', value: 102 }, { date: '2024-03', value: 104 }, { date: '2024-04', value: 106 }, { date: '2024-05', value: 108 } ] },
      { id: 12,fundName: 'Government Securities Bond', overallGrowth: 10.5, riskProfile: 'Low', returns: { oneYear: 5.5, threeYear: 16.2, fiveYear: 28.0 }, fundManager: 'Ethan Moore', launchDate: '2013-09-05', AUM: '₹600 Cr', fundType: 'G-Sec', growthData: [ { date: '2024-01', value: 200 }, { date: '2024-02', value: 202 }, { date: '2024-03', value: 204 }, { date: '2024-04', value: 206 }, { date: '2024-05', value: 208 } ] },
      { id: 13,fundName: 'Municipal Bond Fund', overallGrowth: 11.8, riskProfile: 'Low', returns: { oneYear: 6.0, threeYear: 17.5, fiveYear: 30.5 }, fundManager: 'Grace Davis', launchDate: '2017-02-19', AUM: '₹300 Cr', fundType: 'Municipal', growthData: [ { date: '2024-01', value: 150 }, { date: '2024-02', value: 152 }, { date: '2024-03', value: 154 }, { date: '2024-04', value: 156 }, { date: '2024-05', value: 158 } ] },
      { id: 14,fundName: 'Liquid Short-Term Bond', overallGrowth: 9.5, riskProfile: 'Low', returns: { oneYear: 4.8, threeYear: 14.2, fiveYear: 25.0 }, fundManager: 'Leo Hall', launchDate: '2019-05-20', AUM: '₹200 Cr', fundType: 'Liquid', growthData: [ { date: '2024-01', value: 50 }, { date: '2024-02', value: 51 }, { date: '2024-03', value: 52 }, { date: '2024-04', value: 53 }, { date: '2024-05', value: 54 } ] },
      { id: 15,fundName: 'Dynamic Bond Fund', overallGrowth: 14.2, riskProfile: 'Moderate', returns: { oneYear: 7.2, threeYear: 20.0, fiveYear: 35.5 }, fundManager: 'Mia Allen', launchDate: '2016-12-30', AUM: '₹550 Cr', fundType: 'Dynamic', growthData: [ { date: '2024-01', value: 180 }, { date: '2024-02', value: 182 }, { date: '2024-03', value: 185 }, { date: '2024-04', value: 190 }, { date: '2024-05', value: 195 } ] },
      { id: 16,fundName: 'Short Duration Bond', overallGrowth: 13.5, riskProfile: 'Moderate', returns: { oneYear: 6.8, threeYear: 19.0, fiveYear: 34.2 }, fundManager: 'Olivia Stewart', launchDate: '2018-08-08', AUM: '₹370 Cr', fundType: 'Short Duration', growthData: [ { date: '2024-01', value: 90 }, { date: '2024-02', value: 91 }, { date: '2024-03', value: 92 }, { date: '2024-04', value: 94 }, { date: '2024-05', value: 96 } ] },
      { id: 17,fundName: 'Credit Risk Bond', overallGrowth: 16.0, riskProfile: 'High', returns: { oneYear: 8.5, threeYear: 22.5, fiveYear: 39.0 }, fundManager: 'Daniel Young', launchDate: '2015-11-11', AUM: '₹450 Cr', fundType: 'Credit Risk', growthData: [ { date: '2024-01', value: 210 }, { date: '2024-02', value: 212 }, { date: '2024-03', value: 214 }, { date: '2024-04', value: 216 }, { date: '2024-05', value: 218 } ] },
      { id: 18,fundName: 'Ultra Short-Term Bond', overallGrowth: 9.0, riskProfile: 'Low', returns: { oneYear: 4.5, threeYear: 13.0, fiveYear: 23.0 }, fundManager: 'Sophia Hill', launchDate: '2020-03-18', AUM: '₹210 Cr', fundType: 'Ultra Short', growthData: [ { date: '2024-01', value: 30 }, { date: '2024-02', value: 31 }, { date: '2024-03', value: 32 }, { date: '2024-04', value: 33 }, { date: '2024-05', value: 34 } ] },
      { id: 19,fundName: 'Floating Rate Bond', overallGrowth: 10.0, riskProfile: 'Low', returns: { oneYear: 5.0, threeYear: 15.0, fiveYear: 27.0 }, fundManager: 'Liam Wright', launchDate: '2017-06-15', AUM: '₹390 Cr', fundType: 'Floating Rate', growthData: [ { date: '2024-01', value: 70 }, { date: '2024-02', value: 71 }, { date: '2024-03', value: 72 }, { date: '2024-04', value: 74 }, { date: '2024-05', value: 76 } ] },
      { id: 20,fundName: 'Income Opportunities Bond', overallGrowth: 13.0, riskProfile: 'Moderate', returns: { oneYear: 6.5, threeYear: 18.0, fiveYear: 32.5 }, fundManager: 'Noah Lewis', launchDate: '2016-04-25', AUM: '₹500 Cr', fundType: 'Income', growthData: [ { date: '2024-01', value: 110 }, { date: '2024-02', value: 112 }, { date: '2024-03', value: 114 }, { date: '2024-04', value: 116 }, { date: '2024-05', value: 118 } ] }
    ]
  

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
