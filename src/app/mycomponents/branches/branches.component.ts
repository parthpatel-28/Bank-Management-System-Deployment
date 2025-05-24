import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Clipboard } from '@angular/cdk/clipboard';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
  providers: [MessageService] 
})
export class BranchesComponent implements OnInit {
  branchesData: any[];
  branch : any ;
  selectedBranch : any = 0;
  employeesList :any[] =[];
  yearlyPerformanceChartData: any;  
  yearlyPerformanceChartOptions: any;  

  loanRepaymentStatusChartData: any;
  loanTypeDistributionChartData: any;
  transactionChartData: any;
  transactionCategoryChartData: any;

  loanRepaymentStatusChartOptions: any;
  loanTypeDistributionChartOptions: any;
  transactionChartOptions: any;
  transactionCategoryChartOptions: any;


  cards2 = ['Card 1', 'Card 2',  'Card 3' ];
  cityTabs = [
    { label: 'Mumbai', value: 1 },
    { label: 'Delhi', value: 2 },
    { label: 'Chennai', value: 3 },
    { label: 'Pune', value: 4 },
    { label: 'Banglore', value: 5 },
    {label : 'Hyderabad' , value :6}
  ];

  constructor(
    private DataService : DataService,
    private messageService: MessageService,
    private clipboard: Clipboard
  ) { 

    this.branchesData = DataService.branches.branchesData;
    
    this.branch = this.branchesData[0];
    console.log(this.branch);
    
    this.employeesList = this.branchesData[0].employees;


  }


  
  ngOnInit(): void {

  console.log("branch",this.branch);
  this.prepareYearlyPerformanceChart();
  this.prepareCharts();

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

  prepareYearlyPerformanceChart() {
    this.yearlyPerformanceChartData = {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      datasets: [
        {
          label: 'Yearly Performance',
          data: this.branch.yearlyPerformance,
          fill: false,
          borderColor: '#3B6978',
          tension: 0.4
        }
      ]
    };

    this.yearlyPerformanceChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  }

  prepareCharts() {
    // Loan Repayment Status Pie Chart
    this.loanRepaymentStatusChartData = {
      labels: ['Fully Paid', 'Overdue', 'Pending', 'Defaulted'],
      datasets: [
        {
          data: [
            this.branch.loanRepaymentStatus.fullyPaid,
            this.branch.loanRepaymentStatus.overdue,
            this.branch.loanRepaymentStatus.pending,
            this.branch.loanRepaymentStatus.defaulted
          ],
          backgroundColor: ['#3B6978', '#204051', '#D9E4E6', '#678D99'],
          hoverBackgroundColor: ['#2A4D56', '#1A2A35', '#D9E4E6', '#4C6B74'],

        }
      ]
    };

    // Loan Type Distribution Pie Chart
    this.loanTypeDistributionChartData = {
      labels: ['Home Loans', 'Personal Loans', 'Auto Loans', 'Business Loans', 'Others'],
      datasets: [
        {
          data: [
            this.branch.loanTypeDistribution.homeLoans,
            this.branch.loanTypeDistribution.personalLoans,
            this.branch.loanTypeDistribution.autoLoans,
            this.branch.loanTypeDistribution.businessLoans,
            this.branch.loanTypeDistribution.others
          ],
          backgroundColor: ['#4F6B6F', '#2E4D56', '#A9C1B7', '#5C7F7A', '#4F6B6F'],
          hoverBackgroundColor: ['#3A4C50', '#1D2F3E', '#A9C1B7', '#4C6E6A', '#3A4C50'],
          
        }
      ]
    };


    // You can define options if necessary for each chart
    this.loanRepaymentStatusChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          display: true
        }
      }
    };

    this.loanTypeDistributionChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          display: true
        }
      }
    };


  }

  onTabChange(event: any) {
  const index = event.index;
  this.branch = this.branchesData[index];
  this.prepareYearlyPerformanceChart();
  this.prepareCharts();
  
  }

  copyToClipboard(Id : any){
     this.clipboard.copy(Id);
     this.showSuccess("Employee ID Copied successfully");
  }
}