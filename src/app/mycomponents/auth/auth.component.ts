import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  username: any = "admin";
  password: any = "Password@123";
  inputUsername: any = "";
  inputPassword: any = "";
  loginFailed : boolean = false;

  constructor(private router: Router, private authService: AuthServicesService) {}

  ngOnInit(
  ): void {
        this.inputPassword = "Password@123";
        this.inputUsername = "admin"
  }

  login() {
    if (this.inputPassword === this.password && this.inputUsername === this.username) {
      this.authService.login();
      console.log("Logged In");
      this.router.navigate(["dashboard"]);
    } else {
      console.log("Wrong Credentials");
      this.loginFailed = true;
    }
  }
}
