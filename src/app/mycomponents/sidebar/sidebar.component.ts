import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

   @Output() clickmenu = new EventEmitter<void>();
    @Input() menu!: boolean;
  constructor() { }

  menuclick(){
    console.log("clicked");
    this.clickmenu.emit();
  }
  ngOnInit(): void {
    console.log("menu", this.menu);
  }

}
