import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login/login.service';
import { MycartService } from '../mycart/mycart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MycartService]
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  _isAuthenticated: boolean = false;
  private _userSubcription: Subscription;
  constructor(
    private _loginService: LoginService) { }

  ngOnInit() {
    this._userSubcription = this._loginService.user.subscribe(
      user => {
        this._isAuthenticated = !!user;
      }
    );
  }
  onLogout(){
    this._loginService.logOut();
  }
  ngOnDestroy(): void {
    this._userSubcription.unsubscribe();
  }
}
