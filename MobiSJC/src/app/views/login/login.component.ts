import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  email : string = '';
  senha : string = '';

  constructor(private auth : AuthService, private router: Router) { }
  
  @ViewChild('f', { static: false }) signupForm!: NgForm ;
  ngOnInit(): void {

  }

  submitted = false;

  login() {
    if(this.email == ''){
      alert('Por favor entre com email');
      return;
    }
    if (this.senha == '') {
      alert('Por favor entre com a senha');
      return;
    }
    this.auth.login(this.email,this.senha);

    this.email = '';
    this.senha = '';
    this.router.navigate(['/menu']);
  }

  public inputType:string = 'senha'
  public showPassword(event:any):void{
    event.target.checked ? this.inputType = 'text' : this.inputType = 'senha';
  }

}