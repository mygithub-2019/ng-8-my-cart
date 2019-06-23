import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-go-up',
  templateUrl: './go-up.component.html',
  styleUrls: ['./go-up.component.scss']
})
export class GoUpComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    document.getElementById("goTop").style.display = 'none';
  }
  
  scrollToTop(){
    document.documentElement.scrollTop = 0;
  }
  @HostListener('window:scroll', ['$event'])
  scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("goTop").style.display = '';
    } else {
      document.getElementById("goTop").style.display = 'none';
    }
  }
}
