import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaronaComponent } from './carona.component';

describe('CaronaComponent', () => {
  let component: CaronaComponent;
  let fixture: ComponentFixture<CaronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
