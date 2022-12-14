import { Component, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RideService } from '../shared/ride.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

    constructor(public formBuilder: FormBuilder, private authService: AuthService, private rideService: RideService, private router: Router) { }
    @ViewChild('modal') content: any;
    public formGroup!: FormGroup;
    public titulo: string = '';
    public mensagem: string = '';
    public nota: number = 0;
    public showSucss: boolean = false;
    public uid: string = this.authService.userData.uid ?? '';

    ngOnInit(): void {
      this.formGroup = this.createForm();
    }

    createForm(): FormGroup {
      return this.formBuilder.group({
        titulo: [this.titulo],
        mensagem: [this.mensagem],
        nota: [this.nota],
        uid: [this.uid]
      });
    }
}
