import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  showAlert: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showAlert = false;
    }, 1000)
  }

}
