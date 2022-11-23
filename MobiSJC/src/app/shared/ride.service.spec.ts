import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { RideService } from './ride.service';

describe('AuthService', () => {
    let service: RideService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AngularFireModule.initializeApp(environment.firebase),
            ]
        });
        service = TestBed.inject(RideService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
