import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  propToastType: string;
  showToaster: boolean = false;
  showModelAlert: boolean = false;
  constructor(
    private router:Router, 
    private _regService: RegisterService
    ) { }

  ngOnInit() {
    this.propToastType = "";
  }

  register(formData: NgForm){
    //this.showAlert = status;
    //this.router.navigate(['/login']);
    if(!formData.valid){
      return
    }
    const email = formData.value.email;
    const pwd = formData.value.pwd;
    this._regService.authSignUp(email, pwd).subscribe(
      res => {
      this.propToastType = "success";
      this.showToaster = true;
      this.showModelAlert = true;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
      
    }, errr => {
      this.propToastType = errr;
      this.showToaster = true;
      this.showModelAlert = true;
      console.log(errr);
    })
    formData.reset();
  }
}
