import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() clickassistance = new EventEmitter<void>();

  constructor(private auth : AuthServicesService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  getassistance(){
    this.clickassistance.emit();
  }

  logout(){
    console.log("loggedOut");
   this.auth.logout()
   this.router.navigate(["auth"]);
  }

}
