import { Injectable } from '@angular/core';
import { MycartService } from '../mycart/mycart.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  cartNotificaitonCount: number = 0;
  constructor(private _mycartNotification: MycartService) { }

  setItemNotificaiton(){
    //this.cartNotificaitonCount = this._mycartNotification.getItems().length;
  }
}
