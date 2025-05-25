import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private auth : AuthServicesService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("loggedOut");
   this.auth.logout()
   this.router.navigate(["auth"]);
  }

}
