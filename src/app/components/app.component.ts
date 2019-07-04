import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'my-cart';
  constructor(
    private _authLoginService: LoginService
  ){}
  ngOnInit(){
    this._authLoginService.autoLogin();
  }
}
