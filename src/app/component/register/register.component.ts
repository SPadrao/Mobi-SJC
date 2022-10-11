import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  senha : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  register() {
    if(this.email==''){
      alert('Por favor insira seu email');
      return;
    }
    if(this.senha==''){
      alert('Por favor insira sua senha');
      return;
    }

    this.auth.register(this.email,this.senha);
    this.email = '';
    this.senha = '';

  } 
}
