import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-alert',
  templateUrl: './model-alert.component.html',
  styleUrls: ['./model-alert.component.scss']
})
export class ModelAlertComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onModelClose(){
    this.close.emit("");
  }
}
