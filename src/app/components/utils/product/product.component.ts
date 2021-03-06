import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MycartService } from '../../mycart/mycart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @Input() productItem: any
  @Input() productItemIndex: any
  @Output() selectedProductEmitter = new EventEmitter();
  addToCartMsg: string = '';
  //quintity: number = 0;
  constructor(private _myCartServ: MycartService) { }

  ngOnInit() {
  }
  choosenColor(event: Event): void {
    debugger
    let elementId: string = (event.target as Element).id;
    let ids = document.getElementById(elementId).parentNode.children;
    for(let i=0; i< ids.length; i++){
      ids[i]['classList'].remove('selected-color')
    }
    document.getElementById(elementId).classList.add('selected-color');
    let img = document.getElementById(elementId).parentNode.parentNode.parentNode.children[0];
    //img['style'].border ='2px solid '+ elementId.replace(/[0-9]/g, '');  
    //img['style']['border-left'] ='5px solid '+ elementId.replace(/[0-9]/g, '');
    img['style']['border-bottom'] ='3px solid '+ elementId.replace(/[0-9]/g, '');
  }

  addToCart(selectedItem){
    //this.quintity++;
    if(selectedItem.qty){
      selectedItem.qty++
    }else{
      selectedItem.qty = 1;
    }
    this._myCartServ.addItems(selectedItem);
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(() => { 
      x.className = x.className.replace("show", ""); 
    }, 3000);
    //this.selectedProductEmitter.emit(selectedItem);
  }
  buyNow(productInfo){
    console.log(productInfo);
  }

}
