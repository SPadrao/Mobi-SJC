import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {

  email : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  senhaesquecida(){
    this.auth.senhaesquecida(this.email);
    this.email = '';
    
  }

}
