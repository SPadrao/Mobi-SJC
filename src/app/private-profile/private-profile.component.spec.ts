import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProfileComponent } from './private-profile.component';

describe('PrivateProfileComponent', () => {
  let component: PrivateProfileComponent;
  let fixture: ComponentFixture<PrivateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
