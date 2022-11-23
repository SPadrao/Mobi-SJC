import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

describe('AuthService', () => {
  let service: AuthService;

  // const authState: MockUser = {
  //   displayName: null,
  //   isAnonymous: true,
  //   uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
  // };

  // const mockAngularFireAuth: any = {
  //   auth: jasmine.createSpyObj('auth', {
  //     'signInAnonymously': Promise.reject({
  //       code: 'auth/operation-not-allowed'
  //     }),
  //     // 'signInWithPopup': Promise.reject(),
  //     // 'signOut': Promise.reject()
  //   }),
  //   authState: Observable.of(authState)
  // };

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

    //service.userData.uid = 'TEST ID';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
