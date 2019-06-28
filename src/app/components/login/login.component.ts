import { Component, OnInit } from '@angular/core';
import { LoginService, RegResponseData} from './login.service';
import {NgForm} from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  propToastType: string = "";
  showToaster: boolean = false;
  router: any;
  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    
  }
  // login(status: boolean){
  //   //this._loginService.setUserLoggedInStatus(status);
  // }
  login(loginForm: NgForm){
    let authObs: Observable<RegResponseData>;
    //console.log(loginForm);
    this._loginService.authLogin(
      loginForm.value.email,
      loginForm.value.pwd).subscribe(
        res => {
          this.showToaster = true;
          this.propToastType = "s";
          console.log(res);
        },
        err => {
          this.showToaster = true;
          this.propToastType = err;
          console.log(err);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
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
