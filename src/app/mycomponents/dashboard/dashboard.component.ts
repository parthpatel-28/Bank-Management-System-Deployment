import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities: any[];
  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  pieChartData2 :any;
  lineChartData : any;
  lineChartOptions : any;
  cards1 = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 4', 'Card 4', 'Card 4', 'Card 4'];
  cards2 = ['Card 1', 'Card 2',  'Card 3' ];

  constructor() { 
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];


    this.data = [
      {name: 'Parth' , rollNo: 23, id:342 , branch:'CSBS'},
      {name: 'Bhaktil' , rollNo: 43, id:452 , branch:'Civil'},
      {name: 'Yash' , rollNo: 45, id:765 , branch:'Mechanical'},
      {name: 'Parth' , rollNo: 23, id:342 , branch:'CSBS'},
      {name: 'Bhaktil' , rollNo: 43, id:452 , branch:'Civil'},
      {name: 'Yash' , rollNo: 45, id:765 , branch:'Mechanical'},
      {name: 'Parth' , rollNo: 23, id:342 , branch:'CSBS'},
      {name: 'Bhaktil' , rollNo: 43, id:452 , branch:'Civil'},
      {name: 'Yash' , rollNo: 45, id:765 , branch:'Mechanical'},
      {name: 'Parth' , rollNo: 23, id:342 , branch:'CSBS'},
      {name: 'Bhaktil' , rollNo: 43, id:452 , branch:'Civil'},
      {name: 'Yash' , rollNo: 45, id:765 , branch:'Mechanical'},
      {name: 'Parth' , rollNo: 23, id:342 , branch:'CSBS'},
      {name: 'Bhaktil' , rollNo: 43, id:452 , branch:'Civil'},
      {name: 'Yash' , rollNo: 45, id:765 , branch:'Mechanical'},
    
    ]

    this.pieChartData = {
      labels: ['Savings', 'NRI', 'Current', 'Fixed'],
      datasets: [
        {
          data: [420000, 280000, 310000, 150000],
          backgroundColor: ['#3B6978', '#204051', '#D9E4E6', '#F2A65A'], // muted blues, beige, and warm tones
          hoverBackgroundColor: ['#2A4D56', '#1A2A35', '#D9E4E6', '#E39D3B']
        }
      ]
    };
    
    
    this.pieChartData2 = {
      labels: ['Revenue', 'Profit', 'Expenses', 'Net Income'],
      datasets: [
        {
          data: [420000, 280000, 310000, 150000],
          backgroundColor: ['#E07A5F', '#F4F1BB', '#81B29A', '#D9BF77'], // warm muted reds, yellows, and greens
          hoverBackgroundColor: ['#F2A98C', '#D7D6A1', '#A7C6B5', '#E8D06B']
        }
      ]
    };
    
    
    

    
  }


  
  ngOnInit(): void {

    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Account Growth',
          data: [120, 135, 150, 170, 180, 185, 175, 190, 190, 190, 170, 150],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4
        },
        {
          label: 'Deposit Growth',
          data: [80, 90, 110, 130, 150, 160, 170, 180, 200, 210, 220, 230],
          fill: false,
          borderColor: '#66BB6A',
          tension: 0.4
        },
        {
          label: 'Loan Approvals',
          data: [200, 210, 220, 240, 230, 220, 200, 200, 170, 165, 150, 120],
          fill: false,
          borderColor: '#FF7043',
          tension: 0.4
        },
        {
          label: 'Revenue Growth',
          data: [50, 100, 170, 130, 110, 130, 150, 170, 160, 165, 180, 195],
          fill: false,
          borderColor: '#FFEB3B',
          tension: 0.4
        }
      ]
    };

    this.lineChartOptions = {
      plugins: {
        title: {
          display: true,
          text: 'Bank Performance Overview (2024)',
          font: {
            size: 15
          }
        },
        legend: {
          position: 'top'
        }
      },
    
    };
    
    

  }

  

}
