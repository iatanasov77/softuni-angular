import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablatureEditComponent } from './tablature-edit.component';

describe('TablatureCreateComponent', () => {
  let component: TablatureEditComponent;
  let fixture: ComponentFixture<TablatureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablatureEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablatureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
