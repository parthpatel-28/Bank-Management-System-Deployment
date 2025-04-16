import { Component, OnInit } from '@angular/core';

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
      labels: ['CSBS', 'Civil', 'Mechanical'],
      datasets: [
        {
          data: [4, 3, 3], // just sample counts
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D']
        }
      ]
    };

    
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

    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Marks',
          data: [65, 59, 80, 81, 56],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4
        }
      ]
    };

  }
}
