import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { MycartService } from '../mycart/mycart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MycartService]
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(
    private _loginService: LoginService) { }

  ngOnInit() {
    this.isLoggedIn = this._loginService.getUserLoggedInStatus();
  }
}
