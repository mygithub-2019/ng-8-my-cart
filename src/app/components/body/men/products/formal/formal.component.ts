import { Component, OnInit } from '@angular/core';
import { MenService } from '../../men.service';

@Component({
  selector: 'app-formal',
  templateUrl: './formal.component.html',
  styleUrls: ['./formal.component.scss']
})
export class FormalComponent implements OnInit {
  menCollection: Array<any> = [];
  constructor(private _menProductsService: MenService) { }

  ngOnInit() {
    this.menCollection = this._menProductsService.getMenProducts('menFormal');
  }
}
