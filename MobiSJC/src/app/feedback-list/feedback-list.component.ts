import { Component, OnInit, Input } from '@angular/core';
import { getAuth } from "firebase/auth";

// const auth = getAuth();
// const user = auth.currentUser;
// if (user !== null) {
//   const email = user.email;
//   const uid = user.uid;
// }

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})

export class FeedbackListComponent implements OnInit {

  // @Input() userName = user?.email;

  constructor() { }

  ngOnInit(): void {
  }

}
// @Input() userName = "Fulano"; fb component
// <app-feedback-list [userName] = "name"></app-feedback-list> outroarq html
// {{userName}} html fb //
