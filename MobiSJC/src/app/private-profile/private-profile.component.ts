import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/models/user.model';
@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.css']
})
export class PrivateProfileComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private authService: AuthService, private userService: UserService) { }
  public formGroup!: FormGroup;
  public user: User = this.authService.userData;
  public showSucss: Boolean = false;

  ngOnInit(): void {
    this.formGroup = this.updatePrivateProfile();
  }

  updatePrivateProfile(): FormGroup {
    // As chaves precisam ser conforme o esperado pelo banco!
    return this.formBuilder.group({
      name: [this.user.name],
      surname: [this.user.surname],
      phone: [this.user.phone],
      car: [this.user.car],
      carPlate: [this.user.carPlate],
    });
  }

  ngSubmit() {
    if (this.formGroup.valid) {
      this.user.name = this.formGroup.value.name;
      this.user.surname = this.formGroup.value.surname;
      this.user.phone = this.formGroup.value.phone;
      this.user.car = this.formGroup.value.car;
      this.user.carPlate = this.formGroup.value.carPlate;
      this.showSucss = this.userService.merge(this.user);
    }
  }
}