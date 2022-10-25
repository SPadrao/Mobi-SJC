import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  constructor(private fireauth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // login method
  login(email: string, senha: string) {
    this.fireauth.signInWithEmailAndPassword(email, senha).then(res => {
      localStorage.setItem('token', 'true');
      this.SetUserData(res.user);

      if (res.user?.emailVerified == true) {
        this.router.navigate(['login-caronas-p1']);
      } else {
        this.router.navigate(['/verificar-email']);
      }

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //register method 
  cadastro(email: string, senha: string) {
    this.fireauth.createUserWithEmailAndPassword(email, senha).then(res => {
      alert('Cadastro feito com sucesso');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/cadastrar']);
    })
  }
  // sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  //email para verificação 
  sendEmailForVarification(user: any) {
    this.fireauth.currentUser.then(u => u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['/verificar-email']);
      }, (err: any) => {
        alert('Something Went Wrong. Not able to send mail to registered Email.');
      })

  }
}
