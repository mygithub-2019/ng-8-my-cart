import { Component, OnInit } from '@angular/core';
import { MenService } from '../../men.service';

@Component({
  selector: 'app-loafers',
  templateUrl: './loafers.component.html',
  styleUrls: ['./loafers.component.scss']
})
export class LoafersComponent implements OnInit {
  menCollection: Array<any> = [];
  constructor(private _menProductsService: MenService) { }

  ngOnInit() {
    this.menCollection = this._menProductsService.getMenProducts('menLoafers');
  }
}
