import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaronaInfoComponent } from './carona-info.component';

describe('CaronaInfoComponent', () => {
  let component: CaronaInfoComponent;
  let fixture: ComponentFixture<CaronaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaronaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaronaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
