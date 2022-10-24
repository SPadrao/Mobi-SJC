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

  /* Conflito
  @ViewChild('f', { static: false }) signupForm!: NgForm ;

  user = {
    email: '',
    password: '',
    password2: '',
    password3: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    if (this.user.password2 === this.user.password3){ //totalmente primitivo, nem funciona
      this.user.password = this.signupForm.value.password2;
    }*/

    form.reset();
  }
}
