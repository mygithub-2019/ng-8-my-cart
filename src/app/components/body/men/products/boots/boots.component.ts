import { Component, OnInit } from '@angular/core';
import { MenService } from '../../men.service';

@Component({
  selector: 'app-boots',
  templateUrl: './boots.component.html',
  styleUrls: ['./boots.component.scss']
})
export class BootsComponent implements OnInit {
  menCollection: Array<any> = [];
  itemDetails = "";
  constructor(private _menProductsService: MenService) { }

  ngOnInit() {
    this.menCollection = this._menProductsService.getMenProducts('menBoots');
  }
  showData(d){
    //this.itemDetails = d;
    alert('added.' + d);
  }
}
