import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ScheduleService } from '../shared/schedule.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private authService: AuthService, 
    private userService: UserService, private scheduleService: ScheduleService) { }

  public formGroup!: FormGroup;
  public uid: string = this.authService.userData.uid;
  public id: string = '';
  public segIda: string = '';
  public segVolta: string = '';
  public terIda: string = '';
  public terVolta: string = '';
  public quaIda: string = '';
  public quaVolta: string = '';
  public quiIda: string = '';
  public quiVolta: string = '';
  public sexIda: string = '';
  public sexVolta: string = '';

  ngOnInit(): void {
    this.formGroup = this.updateSchedule();
  }

  updateSchedule(): FormGroup {
    return this.formBuilder.group({
    uid: [this.uid],
    id: [this.id],
    segIda: [this.segIda],
    segVolta: [this.segVolta],
    terIda: [this.terIda],
    terVolta: [this.terVolta],
    quaIda: [this.quaIda],
    quaVolta: [this.quaVolta],
    quiIda: [this.quiIda],
    quiVolta: [this.quiVolta],
    sexIda: [this.sexIda],
    sexVolta: [this.sexVolta]
    });
  }

  ngSubmit() {
    if (this.formGroup.valid) {
      this.scheduleService.merge(this.formGroup.value);
      this.formGroup.reset();
      console.log(this.scheduleService);
    }
  }
}
