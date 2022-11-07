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

  rideList : Ride[] = []
  uid : string = ''; 
  id : string = '';
  origin : string = '';
  destiny: string = '';
  price!: number;
  embark : string = '';
  vacancy!: number;
  

  constructor(private auth: AuthService, private data : RideService) { }

  ngOnInit(): void {
    this.getAllrides();
  }

  getAllrides(){

    this.data.getAllrides().subscribe(res => {

      this.rideList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }

}
