import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablatureCreateComponent } from './tablature-create.component';

describe('TablatureCreateComponent', () => {
  let component: TablatureCreateComponent;
  let fixture: ComponentFixture<TablatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablatureCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
