import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAndButtonsComponent } from './time-and-buttons.component';

describe('TimeAndButtonsComponent', () => {
  let component: TimeAndButtonsComponent;
  let fixture: ComponentFixture<TimeAndButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAndButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAndButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
