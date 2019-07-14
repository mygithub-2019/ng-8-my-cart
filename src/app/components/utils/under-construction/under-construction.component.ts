import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }

}
