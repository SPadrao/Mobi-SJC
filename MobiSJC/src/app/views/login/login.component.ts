import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  @ViewChild('f', { static: false }) signupForm!: NgForm ;

  user = {
    email: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }

  public inputType:string = 'password'
  public showPassword(event:any):void{
    event.target.checked ? this.inputType = 'text' : this.inputType = 'password';
  }

}