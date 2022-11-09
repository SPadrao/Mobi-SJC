import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  showSuccess(){
    this.toastr.success('Você tem uma Carona Reservada.')
  }
  showWarning(){
    this.toastr.warning('Você tem uma Carona próxima!')
  }
  showRefused(){
    this.toastr.error('Sua carona foi cancelada.')
  }
}
