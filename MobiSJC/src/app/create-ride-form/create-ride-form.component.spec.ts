import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRideFormComponent } from './create-ride-form.component';
import { AuthService } from '../shared/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';

describe('CreateRideFormComponent', () => {
  let component: CreateRideFormComponent;
  let fixture: ComponentFixture<CreateRideFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
      ],
      declarations: [CreateRideFormComponent],
      providers: [
        // AuthService
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateRideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
