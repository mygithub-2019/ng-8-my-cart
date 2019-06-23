import { Component, OnInit } from '@angular/core';
import { MenService } from '../../men.service';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.scss']
})
export class SneakersComponent implements OnInit {
  menCollection: Array<any> = [];
  constructor(private _menProductsService: MenService) { }

  ngOnInit() {
    this.menCollection = this._menProductsService.getMenProducts('menSneakers');
  }

}
