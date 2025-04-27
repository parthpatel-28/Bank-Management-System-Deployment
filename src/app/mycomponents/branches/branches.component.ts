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
  branch : any ;
  constructor() { 

    this.branches = [
      {
        branchId: 'BR001',
        branchName: 'Mumbai Main Branch',
        location: 'Mumbai',
        region: 'Western',
        yearlyPerformance: [75, 78, 80, 82, 85, 88, 90, 92, 95, 97, 98, 100],
        transactionCategoryDistribution: {
          deposits: 40,
          withdrawals: 30,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E001',
            name: 'Amit Sharma',
            position: 'Branch Manager',
            performanceRating: 92
          },
          averagePerformanceRating: 84
        }
        ,
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
          { employeeId: 'E001', name: 'Amit Sharma', position: 'Branch Manager', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 90 },
          { employeeId: 'E002', name: 'Priya Gupta', position: 'Assistant Manager', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 85 },
          { employeeId: 'E003', name: 'Ravi Mehta', position: 'Loan Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 88 },
          { employeeId: 'E004', name: 'Neha Joshi', position: 'Customer Service Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 80 },
          { employeeId: 'E005', name: 'Rajesh Patil', position: 'Relationship Manager', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 75 },
          { employeeId: 'E006', name: 'Sonal Desai', position: 'Operations Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 78 },
          { employeeId: 'E007', name: 'Anil Khanna', position: 'Audit Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 82 },
          { employeeId: 'E008', name: 'Meena Iyer', position: 'Accounts Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 79 },
          { employeeId: 'E009', name: 'Devansh Saxena', position: 'Compliance Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 81 },
          { employeeId: 'E010', name: 'Ritika Bansal', position: 'HR Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 77 },
          { employeeId: 'E011', name: 'Shubham Malhotra', position: 'Marketing Executive', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 74 },
          { employeeId: 'E012', name: 'Divya Sethi', position: 'Customer Relationship Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 80 },
          { employeeId: 'E013', name: 'Kunal Kapoor', position: 'IT Support Officer', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 76 },
          { employeeId: 'E014', name: 'Poonam Nair', position: 'Service Manager', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 83 },
          { employeeId: 'E015', name: 'Harsh Vyas', position: 'Credit Analyst', branch: 'Mumbai Main Branch', region: 'Western', performanceRating: 86 }
        ]
        
      },
      {
        branchId: 'BR002',
        branchName: 'Delhi Branch',
        location: 'Delhi',
        region: 'Northern',
        yearlyPerformance: [68, 70, 72, 74, 77, 80, 83, 85, 88, 90, 92, 95],
        transactionCategoryDistribution: {
          deposits: 50,
          withdrawals: 25,
          loanPayments: 15,
          moneyTransfers: 5,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E021',
            name: 'Ritika Chopra',
            position: 'Senior Manager',
            performanceRating: 94
          },
          averagePerformanceRating: 82
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
          { employeeId: 'E016', name: 'Arjun Sinha', position: 'Branch Manager', branch: 'Delhi Branch', region: 'Northern', performanceRating: 91 },
          { employeeId: 'E017', name: 'Isha Chawla', position: 'Assistant Manager', branch: 'Delhi Branch', region: 'Northern', performanceRating: 87 },
          { employeeId: 'E018', name: 'Sandeep Verma', position: 'Loan Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 84 },
          { employeeId: 'E019', name: 'Tanya Kapoor', position: 'Customer Service Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 79 },
          { employeeId: 'E020', name: 'Vikram Singh', position: 'Relationship Manager', branch: 'Delhi Branch', region: 'Northern', performanceRating: 83 },
          { employeeId: 'E021', name: 'Shruti Pandey', position: 'Operations Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 76 },
          { employeeId: 'E022', name: 'Deepak Arora', position: 'Audit Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 80 },
          { employeeId: 'E023', name: 'Komal Bhatt', position: 'Accounts Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 78 },
          { employeeId: 'E024', name: 'Ankit Tyagi', position: 'Compliance Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 81 },
          { employeeId: 'E025', name: 'Pallavi Chauhan', position: 'HR Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 75 },
          { employeeId: 'E026', name: 'Rohit Batra', position: 'Marketing Executive', branch: 'Delhi Branch', region: 'Northern', performanceRating: 77 },
          { employeeId: 'E027', name: 'Sneha Anand', position: 'Customer Relationship Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 82 },
          { employeeId: 'E028', name: 'Yashwant Chawla', position: 'IT Support Officer', branch: 'Delhi Branch', region: 'Northern', performanceRating: 74 },
          { employeeId: 'E029', name: 'Nisha Bedi', position: 'Service Manager', branch: 'Delhi Branch', region: 'Northern', performanceRating: 85 },
          { employeeId: 'E030', name: 'Tarun Ahuja', position: 'Credit Analyst', branch: 'Delhi Branch', region: 'Northern', performanceRating: 88 }
        ]
        
      },
      {
        branchId: 'BR003',
        branchName: 'Chennai Branch',
        location: 'Chennai',
        region: 'Southern',
        yearlyPerformance: [70, 72, 75, 77, 80, 83, 85, 87, 90, 92, 93, 95],
        transactionCategoryDistribution: {
          deposits: 45,
          withdrawals: 25,
          loanPayments: 10,
          moneyTransfers: 15,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E045',
            name: 'Ananya Krishnan',
            position: 'Branch Manager',
            performanceRating: 95
          },
          averagePerformanceRating: 84
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
          { employeeId: 'E031', name: 'Karthik Raj', position: 'Branch Manager', branch: 'Chennai Branch', region: 'Southern', performanceRating: 92 },
          { employeeId: 'E032', name: 'Divya Natarajan', position: 'Assistant Manager', branch: 'Chennai Branch', region: 'Southern', performanceRating: 86 },
          { employeeId: 'E033', name: 'Suresh Reddy', position: 'Loan Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 84 },
          { employeeId: 'E034', name: 'Meena Srinivasan', position: 'Customer Service Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E035', name: 'Prakash Menon', position: 'Relationship Manager', branch: 'Chennai Branch', region: 'Southern', performanceRating: 79 },
          { employeeId: 'E036', name: 'Aishwarya Mohan', position: 'Operations Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 77 },
          { employeeId: 'E037', name: 'Ravi Krishnan', position: 'Audit Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E038', name: 'Lakshmi Priya', position: 'Accounts Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 78 },
          { employeeId: 'E039', name: 'Manoj Balaji', position: 'Compliance Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 83 },
          { employeeId: 'E040', name: 'Priyanka Subramanian', position: 'HR Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 76 },
          { employeeId: 'E041', name: 'Siddharth Varma', position: 'Marketing Executive', branch: 'Chennai Branch', region: 'Southern', performanceRating: 74 },
          { employeeId: 'E042', name: 'Gayathri Iyer', position: 'Customer Relationship Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E043', name: 'Vishal Mohan', position: 'IT Support Officer', branch: 'Chennai Branch', region: 'Southern', performanceRating: 75 },
          { employeeId: 'E044', name: 'Bhavana Krishnan', position: 'Service Manager', branch: 'Chennai Branch', region: 'Southern', performanceRating: 84 },
          { employeeId: 'E045', name: 'Ajay Raman', position: 'Credit Analyst', branch: 'Chennai Branch', region: 'Southern', performanceRating: 87 }
        ]
        
      },
      {
        branchId: 'BR004',
        branchName: 'Pune Branch',
        location: 'Pune',
        region: 'Western',
        yearlyPerformance: [65, 67, 70, 72, 74, 77, 79, 81, 84, 86, 88, 90],
        transactionCategoryDistribution: {
          deposits: 40,
          withdrawals: 30,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E060',
            name: 'Vikas Kulkarni',
            position: 'Senior Manager',
            performanceRating: 92
          },
          averagePerformanceRating: 81
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
          { employeeId: 'E046', name: 'Aditya Kulkarni', position: 'Branch Manager', branch: 'Pune Branch', region: 'Western', performanceRating: 90 },
          { employeeId: 'E047', name: 'Sneha Joshi', position: 'Assistant Manager', branch: 'Pune Branch', region: 'Western', performanceRating: 86 },
          { employeeId: 'E048', name: 'Rohan Patil', position: 'Loan Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 83 },
          { employeeId: 'E049', name: 'Neha Deshpande', position: 'Customer Service Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 81 },
          { employeeId: 'E050', name: 'Siddharth Naik', position: 'Relationship Manager', branch: 'Pune Branch', region: 'Western', performanceRating: 79 },
          { employeeId: 'E051', name: 'Prachi Apte', position: 'Operations Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 82 },
          { employeeId: 'E052', name: 'Ashutosh Jadhav', position: 'Audit Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 80 },
          { employeeId: 'E053', name: 'Vrushali Shinde', position: 'Accounts Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 78 },
          { employeeId: 'E054', name: 'Nikhil More', position: 'Compliance Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 77 },
          { employeeId: 'E055', name: 'Komal Bhujbal', position: 'HR Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 79 },
          { employeeId: 'E056', name: 'Mandar Dixit', position: 'Marketing Executive', branch: 'Pune Branch', region: 'Western', performanceRating: 75 },
          { employeeId: 'E057', name: 'Ketaki Gokhale', position: 'Customer Relationship Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 80 },
          { employeeId: 'E058', name: 'Akshay Raut', position: 'IT Support Officer', branch: 'Pune Branch', region: 'Western', performanceRating: 76 },
          { employeeId: 'E059', name: 'Shraddha Pathak', position: 'Service Manager', branch: 'Pune Branch', region: 'Western', performanceRating: 83 },
          { employeeId: 'E060', name: 'Omkar Chavan', position: 'Credit Analyst', branch: 'Pune Branch', region: 'Western', performanceRating: 85 }
        ]
        
      },
      {
        branchId: 'BR005',
        branchName: 'Bangalore Branch',
        location: 'Bangalore',
        region: 'Southern',
        yearlyPerformance: [72, 74, 76, 78, 80, 83, 86, 88, 90, 92, 95, 97],
        transactionCategoryDistribution: {
          deposits: 45,
          withdrawals: 30,
          loanPayments: 10,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E075',
            name: 'Ravi Chandrasekhar',
            position: 'Branch Manager',
            performanceRating: 97
          },
          averagePerformanceRating: 88
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
          { employeeId: 'E061', name: 'Rahul Shetty', position: 'Branch Manager', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 92 },
          { employeeId: 'E062', name: 'Ananya Rao', position: 'Assistant Manager', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 88 },
          { employeeId: 'E063', name: 'Naveen Kumar', position: 'Loan Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 85 },
          { employeeId: 'E064', name: 'Divya Menon', position: 'Customer Service Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E065', name: 'Suresh Bhat', position: 'Relationship Manager', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 84 },
          { employeeId: 'E066', name: 'Pooja Nambiar', position: 'Operations Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 79 },
          { employeeId: 'E067', name: 'Ashwin Reddy', position: 'Audit Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 82 },
          { employeeId: 'E068', name: 'Smitha Gowda', position: 'Accounts Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 78 },
          { employeeId: 'E069', name: 'Arvind Hegde', position: 'Compliance Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E070', name: 'Nikita Desai', position: 'HR Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 77 },
          { employeeId: 'E071', name: 'Rakesh Shenoy', position: 'Marketing Executive', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 79 },
          { employeeId: 'E072', name: 'Vidya Pai', position: 'Customer Relationship Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E073', name: 'Vinay Prabhu', position: 'IT Support Officer', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 76 },
          { employeeId: 'E074', name: 'Prajwal Kamath', position: 'Service Manager', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 83 },
          { employeeId: 'E075', name: 'Manasa Bhat', position: 'Credit Analyst', branch: 'Bangalore Branch', region: 'Southern', performanceRating: 86 }
        ]
        
      },
      {
        branchId: 'BR006',
        branchName: 'Hyderabad Branch',
        location: 'Hyderabad',
        region: 'Southern',
        yearlyPerformance: [70, 73, 75, 77, 80, 83, 85, 87, 89, 91, 93, 95],
        transactionCategoryDistribution: {
          deposits: 50,
          withdrawals: 20,
          loanPayments: 15,
          moneyTransfers: 10,
          other: 5
        },
        employeePerformanceIndex: {
          topEmployee: {
            employeeId: 'E090',
            name: 'Shravan Kumar',
            position: 'Senior Manager',
            performanceRating: 95
          },
          averagePerformanceRating: 83
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
          { employeeId: 'E076', name: 'Vikram Reddy', position: 'Branch Manager', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 91 },
          { employeeId: 'E077', name: 'Shruti Rao', position: 'Assistant Manager', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 87 },
          { employeeId: 'E078', name: 'Kiran Varma', position: 'Loan Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 84 },
          { employeeId: 'E079', name: 'Anusha Iyer', position: 'Customer Service Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 82 },
          { employeeId: 'E080', name: 'Ramesh Kiran', position: 'Relationship Manager', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E081', name: 'Swathi Menon', position: 'Operations Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 78 },
          { employeeId: 'E082', name: 'Sanjay Krishna', position: 'Audit Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E083', name: 'Keerthi Reddy', position: 'Accounts Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 79 },
          { employeeId: 'E084', name: 'Chaitanya Rao', position: 'Compliance Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 80 },
          { employeeId: 'E085', name: 'Pavitra Murthy', position: 'HR Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 77 },
          { employeeId: 'E086', name: 'Tejaswini Naidu', position: 'Marketing Executive', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 75 },
          { employeeId: 'E087', name: 'Praveen Yadav', position: 'Customer Relationship Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 81 },
          { employeeId: 'E088', name: 'Bhavya Choudhary', position: 'IT Support Officer', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 76 },
          { employeeId: 'E089', name: 'Aravind Das', position: 'Service Manager', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 82 },
          { employeeId: 'E090', name: 'Divya Krishna', position: 'Credit Analyst', branch: 'Hyderabad Branch', region: 'Southern', performanceRating: 85 }
        ]
        
      }
    ];
    
    this.branch = this.branches[0];
    console.log(this.branches);
    


  }


  
  ngOnInit(): void {
  console.log(this.branches)

  }

}
