import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   @Output() hidemenu = new EventEmitter<boolean>();
   @Output() clickmenu = new EventEmitter<void>();
    @Input() menu!: boolean;
  constructor() { }

  screenWidth: number = window.innerWidth;

  menuclick(){
    console.log("clicked");
    this.clickmenu.emit();
  }
  ngOnInit(): void {
      this.updateScreenWidth();
     window.addEventListener('resize', this.updateScreenWidth.bind(this));
    console.log("menu", this.menu);
  }

  updateScreenWidth(): void {
  this.screenWidth = window.innerWidth;
  console.log(this.screenWidth);
  if (this.screenWidth < 1450) {
    this.hidemenu.emit(false);
  } else {
    this.hidemenu.emit(true);
  }
}

ngOnDestroy(): void {
  window.removeEventListener('resize', this.updateScreenWidth.bind(this));
}
}