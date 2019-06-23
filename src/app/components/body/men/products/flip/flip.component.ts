import { Component, OnInit } from '@angular/core';
import { MenService } from '../../men.service';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.scss']
})
export class FlipComponent implements OnInit {
  menCollection: Array<any> = [];
  constructor(private _menProductsService: MenService) { }

  ngOnInit() {
    this.menCollection = this._menProductsService.getMenProducts('menFlips');
  }
}
