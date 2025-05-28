import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menu : boolean = true;
  assistance : boolean = false;

  hidemenu(){
   this.menu = !this.menu;
  }
  showassistance(){
   this.assistance = !this.assistance; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
