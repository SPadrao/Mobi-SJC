import { Component, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RideService } from '../shared/ride.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ride-form',
  templateUrl: './create-ride-form.component.html',
  styleUrls: ['./create-ride-form.component.css']
})
export class CreateRideFormComponent implements OnInit {
  constructor(public formBuilder: FormBuilder, private authService: AuthService, private rideService: RideService, private router: Router) { }
  @ViewChild('modal') content: any;
  public formGroup!: FormGroup;
  public origin: string = '';
  public destiny: string = '';
  public price: number = 0;
  public embark: string = '';
  public vacancy: number = 0;
  public showSucss: boolean = false;
  public id: string = '';
  public uid: string = this.authService.userData.uid;

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
      id: [this.id],
      uid: [this.uid]
    });
  }

  ngSubmit() {
    if (this.formGroup.valid) {
      const result = this.rideService.merge(this.formGroup.value);

      if (result)
        this.router.navigate(['/menu']);
    }
  }
}
