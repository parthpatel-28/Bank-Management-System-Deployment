import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [MessageService] 
})
export class LayoutComponent implements OnInit {
  menu : boolean = true;
  assistance : boolean = false;
  subjects : any[]= [
    {name: "Platform Issues", value : "Platform Issues" },
    {name: "Platform Access", value : "Platform Access" },
    {name: "Data Manupilation", value : "Data Manupilation" },
    {name: "Accounts", value : "Accounts" },
    {name: "Others", value : "Others" },
  ]

  assistanceData : any ={
    email : undefined,
    userID : undefined,
    subject : undefined,
    desc: undefined,
  }
  assistanceData2 : any ={
    email : undefined,
    userID : undefined,
    subject : undefined,
    desc: undefined,
  }

  
  constructor(  private messageService: MessageService,) { }

  ngOnInit(): void {
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

  clickmenu(){
   this.menu = !this.menu;
  }
  hidemenu(value : boolean){
    this.menu = value;
  }
  showassistance(){
   this.assistance = !this.assistance; 
  }

  hideAssistance(){
    this.assistance = false;
    document.body.style.overflow = 'auto';
    console.log(this.assistanceData);
    this.assistanceData = this.assistanceData2;
    this.showSuccess("Assistance Query successfully Registered ")
  }
  onSidebarHide() {
  document.body.style.overflow = 'auto';
 

  const overlay = document.querySelector('.p-sidebar-mask');
  if (overlay) {
    overlay.remove();
  }
}

}