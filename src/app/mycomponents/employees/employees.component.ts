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
  branches : any[];
  block : any;
  selectedBranch : any;
  accountNumber : any;
  cityTabs = [
    { label: 'Employees', value: 1 },
    { label: 'Blocked Employees', value: 2 }
  ];


  constructor(
    private DataService: DataService,
  ) {
    this.branches = DataService.global.branches;
    this.employeesData = DataService.employees.employeesData;
    this.employeesDataMain = this.employeesData;
    
    


   }

  ngOnInit(): void {
  }
onTabChange(value :any){
  console.log(value);
  this.block = value.index
}

Click_Search(value : any){
  this.employeesData = this.employeesDataMain

  if(this.selectedBranch.branchName != "All" && this.selectedBranch != 1){
    this.employeesData  = this.employeesData.filter(account => account.branch === this.selectedBranch.branchName);
 
  }
}
Click_Reset(){
  this.employeesData = this.employeesDataMain;
  this.selectedBranch = 1;

}


}
