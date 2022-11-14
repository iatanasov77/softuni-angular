import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTablaturesComponent } from './latest-tablatures.component';

describe('LatestTablaturesComponent', () => {
  let component: LatestTablaturesComponent;
  let fixture: ComponentFixture<LatestTablaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTablaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTablaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
