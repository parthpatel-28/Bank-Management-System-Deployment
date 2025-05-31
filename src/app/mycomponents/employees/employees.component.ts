import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [MessageService] 
})
export class EmployeesComponent implements OnInit {

  employeesData : any[];
  employeesDataMain : any[];
  departmentList : any[];
  positionList : any[];
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
  blockbutton : any;
  cards1 = ['Card 1', 'Card 2', 'Card 2', 'Card 2', 'Card 2', 'Card 2', 'Card 2',];
  cityTabs = [
    { label: 'Employees', value: 0 },
    { label: 'Blocked Employees', value: 1 }
  ];
  employeeDisplay : boolean = false;
  newEmployee : FormGroup;

  constructor(
    private DataService: DataService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.branches = DataService.global.branches;
    this.employeesData = DataService.employees.employeesData;
    this.employeesDataMain = this.employeesData;
    this.selectedEmployee = DataService.employees.selectedEmployee
    this.positionList = DataService.employees.positions;
    this.departmentList = DataService.employees.departments;
    this.newEmployee = this.fb.group({
       employeeId: [null, Validators.required],
       name: [null, Validators.required,],
       position: [null, Validators.required],
       department: [null, Validators.required],
       dateOfJoining: [null, Validators.required],
       contactNumber: [null, Validators.required],
       email: [null, Validators.required],
       branch: [null, Validators.required],
       employmentStatus: ["Active"],
       salary: [null, Validators.required],
       blocked: [false]
    })



   }

  ngOnInit(): void {
    console.log("position", this.positionList);
  }
onTabChange(value :any){
  console.log(value);
  this.block = value.index
  console.log("block " , this.block);
}
showSuccess(value : any) {
  this.messageService.add({
    key: 'success',
    severity: 'success',
    summary: 'Done!',
    detail:  this.selectedEmployee.name +" is "+ value+"ed"
  });
}

addEmployee(){
this.employeeDisplay = true;

}

saveNewEmployee(){
  this.employeeDisplay = false;
console.log(this.newEmployee.value);
console.log("full", this.newEmployee);


const Employee = this.newEmployee.value;

this.employeesDataMain.push(Employee); 
this.employeesData = this.employeesDataMain;

this.newEmployee.reset();
this.newEmployee.value.employmentStatus = " Active";
this.newEmployee.value.blocked = false;

}
 

Click_Search(value : any){
  this.employeesData = this.employeesDataMain

  if(this.selectedBranch.branchName != "All" && this.selectedBranch != 1){
    this.employeesData  = this.employeesData.filter(account => account.branch === this.selectedBranch.branchName);
  }

  if(this.search != null || this.search != ""){
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

  if (this.selectedEmployee) {
    this.blockbutton = this.selectedEmployee.blocked ? "Unblock" : "Block";
    this.display = true;
  }
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
     this.blockbutton = this.blockbutton == "Unblock" ? "Block" : "Unblock";
this.showSuccess(this.blockbutton== "Unblock" ? "Block" : "Unblock" )
    this.display = false;
}



}