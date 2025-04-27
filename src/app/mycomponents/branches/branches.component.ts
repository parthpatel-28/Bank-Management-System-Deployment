import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  branches: any[];
  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  constructor() { 

    this.branches = [
      {
        branchId: 'BR001',
        branchName: 'Mumbai Main Branch',
        location: 'Mumbai',
        region: 'Western',
        transactionCategoryDistribution: {
          deposits: 40,
          withdrawals: 30,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topPerformers: 20,
          averagePerformers: 60,
          lowPerformers: 15,
          others: 5
        },
        loanTypeDistribution: {
          homeLoans: 35,
          personalLoans: 25,
          autoLoans: 20,
          businessLoans: 15,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 50,
          overdue: 20,
          pending: 25,
          defaulted: 5
        },
        performance: {
          overall: 80, // performance score out of 100
          growth: '10% increase from last year',
          transactions: {
            totalTransactions: 15000,
            successfulTransactions: 14000,
            failedTransactions: 1000
          }
        },
        employees: [
          {
            employeeId: 'E001',
            name: 'Amit Sharma',
            position: 'Branch Manager',
            branch: 'Mumbai Main Branch',
            region: 'Western',
            performanceRating: 90
          },
          {
            employeeId: 'E002',
            name: 'Priya Gupta',
            position: 'Customer Service Officer',
            branch: 'Mumbai Main Branch',
            region: 'Western',
            performanceRating: 75
          },
          {
            employeeId: 'E003',
            name: 'Ravi Mehta',
            position: 'Loan Officer',
            branch: 'Mumbai Main Branch',
            region: 'Western',
            performanceRating: 85
          }
        ]
      },
      {
        branchId: 'BR002',
        branchName: 'Delhi Branch',
        location: 'Delhi',
        region: 'Northern',
        transactionCategoryDistribution: {
          deposits: 50,
          withdrawals: 25,
          loanPayments: 15,
          moneyTransfers: 5,
          other: 5
        },
        employeePerformanceIndex: {
          topPerformers: 30,
          averagePerformers: 50,
          lowPerformers: 15,
          others: 5
        },
        loanTypeDistribution: {
          homeLoans: 40,
          personalLoans: 30,
          autoLoans: 15,
          businessLoans: 10,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 60,
          overdue: 15,
          pending: 20,
          defaulted: 5
        },
        performance: {
          overall: 85,
          growth: '15% increase from last year',
          transactions: {
            totalTransactions: 12000,
            successfulTransactions: 11500,
            failedTransactions: 500
          }
        },
        employees: [
          {
            employeeId: 'E004',
            name: 'Nisha Singh',
            position: 'Branch Manager',
            branch: 'Delhi Branch',
            region: 'Northern',
            performanceRating: 95
          },
          {
            employeeId: 'E005',
            name: 'Karan Verma',
            position: 'Customer Service Officer',
            branch: 'Delhi Branch',
            region: 'Northern',
            performanceRating: 70
          },
          {
            employeeId: 'E006',
            name: 'Pooja Kapoor',
            position: 'Loan Officer',
            branch: 'Delhi Branch',
            region: 'Northern',
            performanceRating: 80
          }
        ]
      },
      {
        branchId: 'BR003',
        branchName: 'Chennai Branch',
        location: 'Chennai',
        region: 'Southern',
        transactionCategoryDistribution: {
          deposits: 45,
          withdrawals: 25,
          loanPayments: 10,
          moneyTransfers: 15,
          other: 5
        },
        employeePerformanceIndex: {
          topPerformers: 25,
          averagePerformers: 55,
          lowPerformers: 15,
          others: 5
        },
        loanTypeDistribution: {
          homeLoans: 30,
          personalLoans: 35,
          autoLoans: 20,
          businessLoans: 10,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 55,
          overdue: 15,
          pending: 20,
          defaulted: 10
        },
        performance: {
          overall: 70,
          growth: '5% increase from last year',
          transactions: {
            totalTransactions: 10000,
            successfulTransactions: 9500,
            failedTransactions: 500
          }
        },
        employees: [
          {
            employeeId: 'E007',
            name: 'Vijay Kumar',
            position: 'Branch Manager',
            branch: 'Chennai Branch',
            region: 'Southern',
            performanceRating: 90
          },
          {
            employeeId: 'E008',
            name: 'Sita Reddy',
            position: 'Customer Service Officer',
            branch: 'Chennai Branch',
            region: 'Southern',
            performanceRating: 80
          },
          {
            employeeId: 'E009',
            name: 'Arvind Raj',
            position: 'Loan Officer',
            branch: 'Chennai Branch',
            region: 'Southern',
            performanceRating: 85
          }
        ]
      },
      {
        branchId: 'BR004',
        branchName: 'Pune Branch',
        location: 'Pune',
        region: 'Western',
        transactionCategoryDistribution: {
          deposits: 40,
          withdrawals: 30,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topPerformers: 35,
          averagePerformers: 50,
          lowPerformers: 10,
          others: 5
        },
        loanTypeDistribution: {
          homeLoans: 30,
          personalLoans: 25,
          autoLoans: 25,
          businessLoans: 15,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 65,
          overdue: 20,
          pending: 10,
          defaulted: 5
        },
        performance: {
          overall: 78,
          growth: '12% increase from last year',
          transactions: {
            totalTransactions: 14000,
            successfulTransactions: 13500,
            failedTransactions: 500
          }
        },
        employees: [
          {
            employeeId: 'E010',
            name: 'Rakesh Deshmukh',
            position: 'Branch Manager',
            branch: 'Pune Branch',
            region: 'Western',
            performanceRating: 90
          },
          {
            employeeId: 'E011',
            name: 'Neha Patil',
            position: 'Customer Service Officer',
            branch: 'Pune Branch',
            region: 'Western',
            performanceRating: 75
          },
          {
            employeeId: 'E012',
            name: 'Manoj Gupta',
            position: 'Loan Officer',
            branch: 'Pune Branch',
            region: 'Western',
            performanceRating: 85
          }
        ]
      },
      {
        branchId: 'BR005',
        branchName: 'Bangalore Branch',
        location: 'Bangalore',
        region: 'Southern',
        transactionCategoryDistribution: {
          deposits: 45,
          withdrawals: 30,
          loanPayments: 10,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topPerformers: 30,
          averagePerformers: 50,
          lowPerformers: 15,
          others: 5
        },
        loanTypeDistribution: {
          homeLoans: 40,
          personalLoans: 20,
          autoLoans: 25,
          businessLoans: 10,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 50,
          overdue: 25,
          pending: 20,
          defaulted: 5
        },
        performance: {
          overall: 80,
          growth: '8% increase from last year',
          transactions: {
            totalTransactions: 11000,
            successfulTransactions: 10500,
            failedTransactions: 500
          }
        },
        employees: [
          {
            employeeId: 'E013',
            name: 'Karthik Reddy',
            position: 'Branch Manager',
            branch: 'Bangalore Branch',
            region: 'Southern',
            performanceRating: 88
          },
          {
            employeeId: 'E014',
            name: 'Sneha Bhat',
            position: 'Customer Service Officer',
            branch: 'Bangalore Branch',
            region: 'Southern',
            performanceRating: 80
          },
          {
            employeeId: 'E015',
            name: 'Ravi Kumar',
            position: 'Loan Officer',
            branch: 'Bangalore Branch',
            region: 'Southern',
            performanceRating: 82
          }
        ]
      },
      {
        branchId: 'BR006',
        branchName: 'Hyderabad Branch',
        location: 'Hyderabad',
        region: 'Southern',
        transactionCategoryDistribution: {
          deposits: 50,
          withdrawals: 20,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topPerformers: 40,
          averagePerformers: 50,
          lowPerformers: 5,
          others: 5
        },
        loanTypeDistribution: {
          homeLoans: 30,
          personalLoans: 40,
          autoLoans: 15,
          businessLoans: 10,
          others: 5
        },
        loanRepaymentStatus: {
          fullyPaid: 60,
          overdue: 10,
          pending: 25,
          defaulted: 5
        },
        performance: {
          overall: 85,
          growth: '12% increase from last year',
          transactions: {
            totalTransactions: 13000,
            successfulTransactions: 12500,
            failedTransactions: 500
          }
        },
        employees: [
          {
            employeeId: 'E016',
            name: 'Surya Narayana',
            position: 'Branch Manager',
            branch: 'Hyderabad Branch',
            region: 'Southern',
            performanceRating: 92
          },
          {
            employeeId: 'E017',
            name: 'Lakshmi Rao',
            position: 'Customer Service Officer',
            branch: 'Hyderabad Branch',
            region: 'Southern',
            performanceRating: 78
          },
          {
            employeeId: 'E018',
            name: 'Vijay Suresh',
            position: 'Loan Officer',
            branch: 'Hyderabad Branch',
            region: 'Southern',
            performanceRating: 85
          }
        ]
      }
    ];
    


  }


  
  ngOnInit(): void {
  console.log(this.branches)

  }

}
