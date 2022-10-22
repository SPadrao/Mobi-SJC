import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private authService: AuthService){}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(NgForm);
    
    this.authService.cadastro(email,password)
    
    form.reset();
  }
}
