import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCorridaComponent } from './criar-corrida.component';

describe('CriarCorridaComponent', () => {
  let component: CriarCorridaComponent;
  let fixture: ComponentFixture<CriarCorridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCorridaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
