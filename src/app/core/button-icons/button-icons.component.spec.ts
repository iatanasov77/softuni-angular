import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconsComponent } from './button-icons.component';

describe('ButtonIconsComponent', () => {
  let component: ButtonIconsComponent;
  let fixture: ComponentFixture<ButtonIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
