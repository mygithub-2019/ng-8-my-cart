import { Injectable } from '@angular/core';
import * as menProducts from '../../../model/men.model';

@Injectable({
  providedIn: 'root'
})
export class MenService {

  constructor() { }

  getMenProducts(type: string){
      return menProducts[type];
  }
}
