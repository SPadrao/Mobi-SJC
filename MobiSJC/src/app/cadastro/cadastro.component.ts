import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
    }
    
    this.signupForm.reset();
  }
}
