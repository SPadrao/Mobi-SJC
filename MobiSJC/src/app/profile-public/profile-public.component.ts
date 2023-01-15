import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/models/user.model';
@Component({
  selector: 'app-profile-public',
  templateUrl: './profile-public.component.html',
  styleUrls: ['./profile-public.component.css']
})
export class ProfilePublicComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public user: User = this.authService.userData;
  public whatsapp: String = `https://api.whatsapp.com/send?1=pt_BR&phone=55` + this.user.phone

  ngOnInit(): void {
  }
}
