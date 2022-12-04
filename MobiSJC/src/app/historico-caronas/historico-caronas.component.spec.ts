import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCaronasComponent } from './historico-caronas.component';

describe('HistoricoCaronasComponent', () => {
  let component: HistoricoCaronasComponent;
  let fixture: ComponentFixture<HistoricoCaronasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoCaronasComponent ]
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
