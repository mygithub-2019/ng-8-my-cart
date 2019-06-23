import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLoggedIn: boolean = false;
  constructor() { }

  setUserLoggedInStatus(satus: boolean){
    this.userLoggedIn  = satus;
  }
  getUserLoggedInStatus(): boolean{
    return this.userLoggedIn;
  }
}
