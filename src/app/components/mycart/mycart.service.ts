import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycartService {
  items: any[] = []; 
  constructor() { }
  addItems(item){
    this.items.push(item);
  }

  getItems(){
    return this.items;
  }

}
