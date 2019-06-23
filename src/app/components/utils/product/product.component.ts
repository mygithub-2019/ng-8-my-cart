import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @Input() productItem: any
  @Input() productItemIndex: any
  constructor() { }

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
  buy(productInfo){
    console.log(productInfo);
  }
}
