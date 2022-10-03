import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigemDestinoComponent } from './origem-destino.component';

describe('OrigemDestinoComponent', () => {
  let component: OrigemDestinoComponent;
  let fixture: ComponentFixture<OrigemDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrigemDestinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrigemDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
