import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointDetailedComponent } from './endpoint-detailed.component';

describe('EndpointDetailedComponent', () => {
  let component: EndpointDetailedComponent;
  let fixture: ComponentFixture<EndpointDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
