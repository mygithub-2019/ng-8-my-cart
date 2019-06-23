import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this.isLoggedIn = this._loginService.getUserLoggedInStatus();
  }
}
