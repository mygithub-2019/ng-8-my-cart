import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.navigate(['/men/sports-shoes']);
  }
  showProducts(type: string){
    let lis = document.getElementById(type).parentNode.childNodes;
    for(let i=0; i< lis.length; i++){
      lis[i]['classList'].remove('selected-item')
    }
    document.getElementById(type).classList.add('selected-item');
  }
}
