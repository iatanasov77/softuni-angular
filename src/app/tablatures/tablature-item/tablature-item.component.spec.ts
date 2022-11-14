import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablatureItemComponent } from './tablature-item.component';

describe('TablatureItemComponent', () => {
  let component: TablatureItemComponent;
  let fixture: ComponentFixture<TablatureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablatureItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablatureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
