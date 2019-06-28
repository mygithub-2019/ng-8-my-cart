import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface RegResponseData {
  kind 	:string,
  idToken: 	string,
  email: 	string,
  refreshToken: 	string ,
  expiresIn: 	string 	,
  localId: 	string
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private _http: HttpClient) { }

  authSignUp(email: string, pwd: string){
    return this._http.post<RegResponseData>
    ("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key= AIzaSyDk01QOW-CZA38FAkKV9SlAK_NWwT1gUzw",
    {
      email: email, 
      password: pwd,
      returnSecureToken: true
    }).pipe(catchError(this.errorHandler));
  }
  //
  private errorHandler(eRes: HttpErrorResponse){
    let errorMsg = "Error occurred authSignUp.";
      if(!eRes.error || !eRes.error.error){
        return throwError(errorMsg)
      }
      switch(eRes.error.error.message){
        case "INVALID_EMAIL":
          errorMsg = "Email not valid.";
          break;
        case "EMAIL_EXIST":
          errorMsg = "You have already registered.";
          break;
        case "OPERATION_NOT_ALLOWED":
          errorMsg = "You have already registered[OPERATION_NOT_ALLOWED].";
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          errorMsg = "You have already registered[TOO_MANY_ATTEMPTS_TRY_LATER].";
          break;
      }
      return throwError(errorMsg);
  }
}
