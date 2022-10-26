import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuuComponent } from './menuu.component';

describe('MenuuComponent', () => {
  let component: MenuuComponent;
  let fixture: ComponentFixture<MenuuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
