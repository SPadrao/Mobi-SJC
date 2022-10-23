import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //constructor(private http: HttpClient) { }
  constructor(private afa: AngularFireAuth){}

  cadastro (email: string, password: string){
    // this.http.post(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBc4Fit7x9GgaCBLaF1-cpH6xnKPt76SNE',
    //   {
    //     email: email,
    //     password: password,
    //     returnSecureToken: true
    //   }
    //   );
    this.afa.signInWithEmailAndPassword(email, password);
  }
}
