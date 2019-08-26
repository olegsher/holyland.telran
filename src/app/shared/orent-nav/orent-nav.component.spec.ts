import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrentNavComponent } from './orent-nav.component';

describe('OrentNavComponent', () => {
  let component: OrentNavComponent;
  let fixture: ComponentFixture<OrentNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrentNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
