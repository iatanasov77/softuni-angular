import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTacComponent } from './modal-tac.component';

describe('ModalTacComponent', () => {
  let component: ModalTacComponent;
  let fixture: ComponentFixture<ModalTacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
