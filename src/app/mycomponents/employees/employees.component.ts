import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employeesData : any[];
  employeesDataMain : any[];
  selectedEmployee : any;
  blockemployeeIndex : any;
  branches : any[];
  search : any = null;
  block : any;
  deleteDisplay: boolean = false
  display : boolean = false;
  selectedBranch : any = 1;
  selectedTab : any = 0;
  accountNumber : any;
  cityTabs = [
    { label: 'Employees', value: 0 },
    { label: 'Blocked Employees', value: 1 }
  ];


  constructor(
    private DataService: DataService,
  ) {
    this.branches = DataService.global.branches;
    this.employeesData = DataService.employees.employeesData;
    this.employeesDataMain = this.employeesData;
    this.selectedEmployee = DataService.employees.selectedEmployee
    


   }

  ngOnInit(): void {
  }
onTabChange(value :any){
  console.log(value);
  this.block = value.index
  console.log("block " , this.block);
}

Click_Search(value : any){
  this.employeesData = this.employeesDataMain

  if(this.selectedBranch.branchName != "All" && this.selectedBranch != 1){
    this.employeesData  = this.employeesData.filter(account => account.branch === this.selectedBranch.branchName);
  }

  if(this.search != null){
    console.log(this.search);
    this.employeesData  = this.employeesData.filter(account => account.name.toLowerCase().includes(this.search.toLowerCase()) );
  }

}
Click_Reset(){
  this.employeesData = this.employeesDataMain;
  this.selectedBranch = 1;
  this.search = null

}

employeeDetails(value : string){

  const employee = this.employeesData.filter(account => account.employeeId === value);
  
  this.selectedEmployee = employee[0]  
  
   this.display = true;
}

employeeBlock(value : string){
  this.deleteDisplay = true;
 const employeeIndex  = this.employeesData.findIndex((account) => account.employeeId === value );
 this.selectedEmployee = this.employeesData[employeeIndex];
 this.blockemployeeIndex = employeeIndex;
}



delete(){
  this.deleteDisplay = false;
  if(this.block != 1){
    this.employeesData[this.blockemployeeIndex].blocked = true
     }else{
    this.employeesData[this.blockemployeeIndex].blocked = false
     }
}

}
