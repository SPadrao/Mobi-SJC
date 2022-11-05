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

  constructor(public formBuilder: FormBuilder, private authService: AuthService, private userService: UserService) { }
  public formGroup!: FormGroup;
  public photoURL!: File;
  public name: string = '';
  public surname: string = '';
  public phone!: string;
  public email: string = '';
  public car: string = '';
  public carPlate: string = '';
  public showSucss: boolean = false;
  public uid: string = this.authService.userData.uid;

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
      this.userService.merge(this.formGroup.value);
      this.formGroup.reset();
    }
  }
}
