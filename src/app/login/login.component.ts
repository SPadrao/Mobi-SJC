import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email : string = '';
  senha : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  login() {
    if(this.email==''){
      alert('Por favor insira seu email');
      return;
    }
    if(this.senha==''){
      alert('Por favor insira sua senha');
      return;
    }

    this.auth.login(this.email,this.senha);
    this.email = '';
    this.senha = '';
  }

}
