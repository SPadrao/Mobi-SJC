import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  email : string = '';
  password2 : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  cadastro() {
    if(this.email==''){
      alert('Por favor insira seu email');
      return;
    }
    if(this.password2==''){
      alert('Por favor insira sua senha');
      return;
    }

    this.auth.cadastro(this.email,this.password2);
    this.email = '';
    this.password2 = '';

  } 
}
