// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-origem-destino',
//   templateUrl: './origem-destino.component.html',
//   styleUrls: ['./origem-destino.component.css']
// })
// export class OrigemDestinoComponent implements OnInit {

//   formPlaces!: FormGroup;

//   constructor(private router: Router) { }

//   @ViewChild('f', { static: false }) signupForm!: NgForm;
//   ngOnInit(): void {
//     this.formPlaces = new FormGroup({
//       current_local: new FormControl('', [Validators.required]),
//       destination: new FormControl('', [Validators.required]),
//       time: new FormControl('', [Validators.required]),
//     })
//   }

//   get current_local() {
//     return this.formPlaces.get("current_local")!;
//   }

//   get destination() {
//     return this.formPlaces.get("destination")!;
//   }

//   get time() {
//     return this.formPlaces.get("time")!;
//   }

//   onSubmit() {
//     this.router.navigate(['/carona']);
//   }

// }

