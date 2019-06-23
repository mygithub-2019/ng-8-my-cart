import { Component, OnInit } from '@angular/core';
import { MenService } from '../../men.service';

@Component({
  selector: 'app-sandals',
  templateUrl: './sandals.component.html',
  styleUrls: ['./sandals.component.scss']
})
export class SandalsComponent implements OnInit {
  menCollection: Array<any> = [];
  constructor(private _menProductsService: MenService) { }

  ngOnInit() {
    this.menCollection = this._menProductsService.getMenProducts('menSandals');
  }
}
