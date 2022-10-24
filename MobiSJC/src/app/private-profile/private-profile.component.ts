import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.css']
})
export class PrivateProfileComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }
  public formGroup!: FormGroup;
  public picture!: File;
  public name: string = '';
  public surname: string = '';
  public birthday!: Date;
  public email: string = '';
  public region: string = '';
  public car: string = '';
  public carPlate: string = '';
  public showSucss: boolean = false;

  ngOnInit(): void {
    this.formGroup = this.updatePrivateProfile();
  }

  updatePrivateProfile(): FormGroup {
    // As chaves precisam ser conforme o esperado pelo banco!
    return this.formBuilder.group({
      picture: [this.picture],
      name: [this.name],
      surname: [this.surname],
      birthday: [this.birthday],
      email: [this.email],
      region: [this.region],
      car: [this.car],
      carPlate: [this.carPlate],
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
          this.formGroup.reset();
    }
  }
}
