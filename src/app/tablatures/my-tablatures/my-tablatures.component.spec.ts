import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTablaturesComponent } from './my-tablatures.component';

describe('LatestTablaturesComponent', () => {
  let component: MyTablaturesComponent;
  let fixture: ComponentFixture<MyTablaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTablaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTablaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
