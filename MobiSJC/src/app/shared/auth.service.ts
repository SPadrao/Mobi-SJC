import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router: Router) { }

  //login method
  login(email : string, password2: string) { 
    this.fireauth.signInWithEmailAndPassword(email, password2).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/login-caronas-p1']);
    },err => {
      alert('err.message');
      this.router.navigate(['/login']);

    })
  }

  //register method
  cadastro(email: string, password2: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password2).then(() => {
      alert('Cadastro feito com sucesso!');
      this.router.navigate(['/login']);

    }, err => {
      alert(err.message);
        this.router.navigate(['/cadastro']);

    })

  }

  //sign out 
  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);

    }, err =>  {
      alert(err.message);
    })
  }
}
