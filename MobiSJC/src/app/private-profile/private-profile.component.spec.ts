import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivateProfileComponent } from './private-profile.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AuthService } from '../shared/auth.service';

describe('PrivateProfileComponent', () => {
  let component: PrivateProfileComponent;
  let fixture: ComponentFixture<PrivateProfileComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [PrivateProfileComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PrivateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
