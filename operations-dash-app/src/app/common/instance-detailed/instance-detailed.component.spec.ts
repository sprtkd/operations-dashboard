import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceDetailedComponent } from './instance-detailed.component';

describe('InstanceDetailedComponent', () => {
  let component: InstanceDetailedComponent;
  let fixture: ComponentFixture<InstanceDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
