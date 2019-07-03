import { Component, OnInit } from '@angular/core';
import { LoginService, RegResponseData} from './login.service';
import {NgForm} from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  propToastType: string = "";
  showAlert: boolean = false;
  router: any;
  authObs: Observable<RegResponseData>;
  constructor(
    private _loginService: LoginService,
    private _router: Router) { }

  ngOnInit() {
    
  }
  // login(status: boolean){
  //   //this._loginService.setUserLoggedInStatus(status);
  // }
  login(loginForm: NgForm){
    
    //console.log(loginForm);
    /*this._loginService.authLogin(
      loginForm.value.email,
      loginForm.value.pwd).subscribe(
        res => {
          this.showAlert = true;
          this.propToastType = "s";
          console.log(res);
          this.router.navigate(['/men']);
        },
        err => {
          this.showAlert = true;
          this.propToastType = err;
          console.log(err);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        }
      );*/
      let _authObs = this._loginService.authLogin(
        loginForm.value.email,
        loginForm.value.pwd);

      _authObs.subscribe(
        res => {
          this.showAlert = true;
          this.propToastType = "s";
          console.log(res);
          this._router.navigate(['/men']);
        },
        err => {
          this.showAlert = true;
          this.propToastType = err;
          console.log(err);
          setTimeout(() => {
            this._router.navigate(['/login']);
          }, 500);
        }
      );
    loginForm.reset();
  }

  //
  private errorHandler(eRes: HttpErrorResponse){
    let errorMsg = "Error occurred authSignUp.";
      if(!eRes.error || !eRes.error.error){
        return throwError(errorMsg)
      }
      switch(eRes.error.error.message){
        case "EMAIL_EXIST":
          errorMsg = "You have already registered.";
          break;
      }
  }
}
