import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ride-form',
  templateUrl: './create-ride-form.component.html',
  styleUrls: ['./create-ride-form.component.css']
})
export class CreateRideFormComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private router: Router) { }
  public formGroup!: FormGroup;
  public origin: string = '';
  public destiny: string = '';
  public price: number = 0;
  public embark: string = '';
  public vacancy: string = '';
  public showSucss: boolean = false;

  ngOnInit(): void {
    this.formGroup = this.createForm();
  }

  createForm(): FormGroup {
    // As chaves precisam ser conforme o esperado pelo banco!
    return this.formBuilder.group({
      origin: [this.origin],
      destiny: [this.destiny],
      price: [this.price],
      embark: [this.embark],
      vacancy: [this.vacancy],
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
          console.log(this.formGroup.value);
          this.formGroup.reset();
          // this.router.navigate(['/carona']);
    }
  }
}
