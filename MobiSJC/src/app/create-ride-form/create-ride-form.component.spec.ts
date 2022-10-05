import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRideFormComponent } from './create-ride-form.component';

describe('CreateRideFormComponent', () => {
  let component: CreateRideFormComponent;
  let fixture: ComponentFixture<CreateRideFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRideFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
