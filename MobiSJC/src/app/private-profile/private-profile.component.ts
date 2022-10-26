import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.css']
})
export class PrivateProfileComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private auth: AuthService, private service: UserService) { }
  public formGroup!: FormGroup;
  public photoURL!: File;
  public name: string = '';
  public surname: string = '';
  public phone!: string;
  public email: string = '';
  public car: string = '';
  public carPlate: string = '';
  public showSucss: boolean = false;
  public uid: string = this.auth.userData.uid;

  ngOnInit(): void {
    this.formGroup = this.updatePrivateProfile();
  }

  updatePrivateProfile(): FormGroup {
    // As chaves precisam ser conforme o esperado pelo banco!
    return this.formBuilder.group({
      picture: [this.photoURL],
      name: [this.name],
      surname: [this.surname],
      phone: [this.phone],
      email: [this.email],
      car: [this.car],
      carPlate: [this.carPlate],
      uid: [this.uid]
    });
  }

  ngSubmit() {
    if (this.formGroup.valid) {
      //Forma como iremos chamar nossas apis para enviar pro banco o form!
      /*this.appService.insertUser(this.formGroup.value).subscribe(response => {
        },
        error => {
        },
        () => {
          this.showSucss = true;
          setTimeout(() =>{this.showSucss = false;}, 4000);
          this.formGroup.reset();
        });*/
      this.service.merge(this.formGroup.value);
      this.formGroup.reset();
    }
  }
}
