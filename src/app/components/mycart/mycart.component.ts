import { Component, OnInit } from '@angular/core';
import { MycartService } from './mycart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  items = [];
  constructor(private _myCartServ: MycartService) { }

  ngOnInit() {
    this.items = this._myCartServ.getItems();
  }
  isCartEmpty(){
    if(this._myCartServ.getItems().length == 0){
      return true;
    }
    return false;
  }
}
