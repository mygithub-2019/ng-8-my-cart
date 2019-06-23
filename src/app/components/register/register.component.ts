import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //showAlert: boolean = false;
  constructor(
    private router:Router
    ) { }

  ngOnInit() {
  }

  register(status: boolean){
    //this.showAlert = status;
    this.router.navigate(['/login']);
  }
}
