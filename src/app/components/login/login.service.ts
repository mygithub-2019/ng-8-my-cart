import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
export interface RegResponseData {
  kind 	:string,
  idToken: 	string,
  email: 	string,
  refreshToken: 	string ,
  expiresIn: 	string 	,
  localId: 	string,
  registered: string  //registered?: string --> ? states Optional 
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLoggedIn: boolean = false;
  constructor(private _http: HttpClient) { }

  setUserLoggedInStatus(satus: boolean){
    this.userLoggedIn  = satus;
  }
  getUserLoggedInStatus(): boolean{
    return this.userLoggedIn;
  }
  authLogin(email: string, pwd: string){
    return this._http.post<RegResponseData>("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDk01QOW-CZA38FAkKV9SlAK_NWwT1gUzw",
    {
      email: email,
      password: pwd
    }).pipe(catchError(this.errorHandler));;
  }
  //
  private errorHandler(eRes: HttpErrorResponse){
    let errorMsg = "Error occurred authSignUp.";
      if(!eRes.error || !eRes.error.error){
        return throwError(errorMsg)
      }
      switch(eRes.error.error.message){
        case "EMAIL_NOT_FOUND":
          errorMsg = "You are not yet registered.";
          break;
        case "INVALID_PASSWORD":
          errorMsg = "Entered invalid password.";
          break;
        case "USER_DISABLED":
          errorMsg = "User disabled.";
          break;
      }
      return throwError(errorMsg);
  }
}
