import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Ride } from '../shared/models/ride.model';
import { RideService } from '../shared/ride.service';

@Component({
  selector: 'app-home',
  templateUrl: './carona.component.html',
  styleUrls: ['./carona.component.css']
})
export class CaronaComponent implements OnInit {

  rideList: Ride[] = [];
  studentObj: Ride = {
    uid: '',
    id: '',
    origin: '',
    destiny: '',
    price: 0,
    embark: '',
    vacancy: 0
  };
  uid: string = '';
  id: string = '';
  origin: string = '';
  destiny: string = '';
  price: number = 0;
  embark: string = '';
  vacancy: number = 0;
  AuthService: any;
  RideService: any;


  constructor(private auth: AuthService, private data: RideService) { }

  ngOnInit(): void {
    this.getAllrides();

  }

  Rides: any;


  getAllrides() {

    this.data.getVacantrides().subscribe(res => {
      this.rideList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

      // let teste = this.rideList.filter((el) => {
      //   return el.vacancy !== 0
      // })
      // this.rideList = teste;
    }, err => {
      alert('Error while fetching student data');
    })
  }
  deleteRide(ride: Ride) {
    if (window.confirm('Tem certeza que deseja cancelar a corrida ?')) {
      this.data.deleteRide(ride);
    }
  }
  reserveRide(ride: Ride) {
    if (window.confirm('Tem certeza que deseja reservar a corrida ?')) {
      this.data.putInPastRide(ride);
      this.data.deleteRide(ride);
    }
  }

}
