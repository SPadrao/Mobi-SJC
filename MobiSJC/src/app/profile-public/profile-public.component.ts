import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-profile-public',
  templateUrl: './profile-public.component.html',
  styleUrls: ['./profile-public.component.css']
})
export class ProfilePublicComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

}
