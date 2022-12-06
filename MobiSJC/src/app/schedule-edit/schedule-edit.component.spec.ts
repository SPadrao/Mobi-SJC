import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleEditComponent } from './schedule-edit.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';

describe('ScheduleEditComponent', () => {
  let component: ScheduleEditComponent;
  let fixture: ComponentFixture<ScheduleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [ScheduleEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScheduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
