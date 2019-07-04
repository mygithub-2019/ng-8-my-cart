import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
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

  tokenExpirationTimer: any;
  //user = new Subject<User>(); //approach-1: Emit an event
  user = new BehaviorSubject<User>(null); //approach-2: Emit an event
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
    }).pipe(
      catchError(this.errorHandler),
      tap(resData=> {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
      )
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const _user = new User(
      email, userId, token, expirationDate
    );
    this.user.next(_user);
    //For auto logout
    //this.autoLogout(expiresIn * 1000);
    //For auto login
    localStorage.setItem('userData', JSON.stringify(_user))
  }
  autoLogin(){
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
    const loadedUser = new User(
      userData.email, 
      userData.id, 
      userData._token, 
      new Date(userData._tokenExpirationDate)
    );
    if(loadedUser){
      const expirationTime = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.user.next(loadedUser);
      this.autoLogout(expirationTime);
    }
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
        case "INVALID_EMAIL":
          errorMsg = "Entered invalid email.";
        break;
      }
      return throwError(errorMsg);
  }

  logOut(){
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer = null;
    this.user.next(null);
  }
  autoLogout(expirationDuration: number){
    this.tokenExpirationTimer = setInterval(() => {
      this.logOut();
    }, expirationDuration);
  }
}
