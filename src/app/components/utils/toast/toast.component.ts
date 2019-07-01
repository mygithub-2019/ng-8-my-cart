import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent implements OnInit {
  @Input() toastType: string;
  @Input() msg: string;
  showToast: boolean = true;
  //title: string = this.toastType;
  constructor() { }
  ngOnInit() {
    //this.title= this.toastType;
    // setTimeout(() => {
    //   this.showToast = false;
    // }, 2000)
  }
}
