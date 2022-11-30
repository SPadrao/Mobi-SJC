import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth'

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
      ],
      providers: [
        { provide: AngularFireAuth, useClass: AngularFireAuth },
        { provide: AuthService, useClass: AuthService }
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
