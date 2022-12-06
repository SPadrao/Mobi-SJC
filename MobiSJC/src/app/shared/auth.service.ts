import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any = {
    uid: 'testingUID',
    email: 'test@test.test',
    emailVerified: true,
  };
  domain: any;

  constructor(private fireauth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.userData.uid = user.uid;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
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
      this.setUserData(res.user);

      if (res.user?.emailVerified == true) {
        this.router.navigate(['/menu']);
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
    this.domain = email.split('@')[1];
    if (this.domain === 'unifesp.br') {
      this.fireauth.createUserWithEmailAndPassword(email, senha).then(res => {
        alert('Cadastro feito com sucesso');
        this.sendEmailForVarification(res.user);
        this.router.navigate(['/login']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/cadastrar']);
      })
    }
    alert("Utilize um email Unifesp!");
  }

  // sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['']);
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

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
