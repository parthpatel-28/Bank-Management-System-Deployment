import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth'); // Use a real token in a real app
  }

  login() {
    localStorage.setItem('auth', 'true');  // Set a token or flag
  }

  logout() {
    localStorage.removeItem('auth');
  }
}
