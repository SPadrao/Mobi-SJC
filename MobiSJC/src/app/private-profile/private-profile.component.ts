import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.css']
})
export class PrivateProfileComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private service: CrudService) { }
  public formGroup!: FormGroup;
  public picture!: File;
  public name: string = '';
  public surname: string = '';
  public phone!: string;
  public email: string = '';
  public car: string = '';
  public carPlate: string = '';
  public showSucss: boolean = false;
  public id: string = '';

  ngOnInit(): void {
    this.formGroup = this.updatePrivateProfile();
  }

  updatePrivateProfile(): FormGroup {
    // As chaves precisam ser conforme o esperado pelo banco!
    return this.formBuilder.group({
      picture: [this.picture],
      name: [this.name],
      surname: [this.surname],
      phone: [this.phone],
      email: [this.email],
      car: [this.car],
      carPlate: [this.carPlate],
      id: [this.id]
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
          this.service.create(this.formGroup.value);
          this.formGroup.reset();
    }
  }
}
