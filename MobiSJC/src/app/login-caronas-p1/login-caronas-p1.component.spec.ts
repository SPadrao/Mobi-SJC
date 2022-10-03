import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCaronasP1Component } from './login-caronas-p1.component';

describe('LoginCaronasP1Component', () => {
  let component: LoginCaronasP1Component;
  let fixture: ComponentFixture<LoginCaronasP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCaronasP1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCaronasP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
