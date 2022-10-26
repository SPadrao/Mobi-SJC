import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  email : string = '';
  senha : string = '';

  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  cadastro(){
    if(this.email == '') {
      alert('Por favor entre com seu email');
      return; 
    }
    if(this.senha == ''){
      alert('Por favor entre com sua senha');
      return;
    }

    this.auth.cadastro(this.email, this.senha);

    this.email = '';
    this.senha = '';
    this.router.navigate(['/menu']);
  }




  
  
}
