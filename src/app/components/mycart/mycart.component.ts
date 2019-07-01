import { Component, OnInit } from '@angular/core';
import { MycartService } from './mycart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  items = [];
  constructor(private _myCartServ: MycartService,
      private _router: Router) { }

  ngOnInit() {
    this.items = this._myCartServ.getItems();
  }
  isCartEmpty(){
    if(this._myCartServ.getItems().length == 0){
      return true;
    }
    return false;
  }
  continueShopping(){
    this._router.navigate(['/men']);
  }
  getTotalCartPrice(){
    return this._myCartServ.getCartAmount();
  }
}
