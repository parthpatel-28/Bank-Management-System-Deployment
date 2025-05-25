import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  loggedIn : boolean = false;
  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth'); // Use a real token in a real app
  }

  login() {
    localStorage.setItem('auth', 'true');  // Set a token or flag
   this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem('auth');
  }
}
