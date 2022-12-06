import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HistoricoCaronasComponent } from './historico-caronas.component';

describe('HistoricoCaronasComponent', () => {
  let component: HistoricoCaronasComponent;
  let fixture: ComponentFixture<HistoricoCaronasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [HistoricoCaronasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HistoricoCaronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
