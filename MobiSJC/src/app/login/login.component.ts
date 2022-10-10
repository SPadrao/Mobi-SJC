import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = '';
  password2 : string = '';
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email == ''){
    alert('Please enter email');
    return;
    }
    if(this.password2 == '') {

      alert('Please enter password');
      return;

    }
    this.auth.login(this.email, this.password2);

    this.email = '';
    this.password2 = '';
  }

}
