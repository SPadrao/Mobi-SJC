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
  public name: string = '';
  public surname: string = '';
  public birthday!: Date;
  public email: string = '';
  public showSucss: boolean = false;

  ngOnInit(): void {
    this.formGroup = this.updatePrivateProfile();
  }

  updatePrivateProfile(): FormGroup {
    // As chaves precisam ser conforme o esperado pelo banco!
    return this.formBuilder.group({
      name: [this.name],
      surname: [this.surname],
      birthday: [this.birthday],
      email: [this.email],
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
