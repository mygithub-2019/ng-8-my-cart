import { Injectable } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Injectable({
  providedIn: 'root'
})
export class MycartService {
  items: any[] = []; 
  totalCartAmount: number = 0;
  constructor() { }
  addItems(item){
    this.items.push(item);
    // setTimeout(()=>{
    //   this._headerService.setItemNotificaiton();
    // }, 1000)
    
  }

  getItems(){
    return this.items;
  }

  getCartAmount(){
    let _selectedItems = this.items;
    this.totalCartAmount = 0;
    for (let index = 0; index < _selectedItems.length; index++) {
      this.totalCartAmount+= parseInt(_selectedItems[index]['prod_details'].price);
    }
    return this.totalCartAmount;
  }
}
