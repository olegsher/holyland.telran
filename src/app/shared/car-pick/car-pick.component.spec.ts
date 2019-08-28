import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPickComponent } from './car-pick.component';

describe('CarPickComponent', () => {
  let component: CarPickComponent;
  let fixture: ComponentFixture<CarPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
