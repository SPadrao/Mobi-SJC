import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  email : string = '';
  senha : string = '';
  

  constructor(private auth: AuthService){ }

  ngOnInit(): void {

  }

  cadastro(){
    if(this.email=='') {
      alert('Por favor entrar com email');
      return
    }
    if (this.senha == '') {
      alert('Por favor entrar com a senha');
    }
    this.auth.cadastro(this.email, this.senha);
  }
}
