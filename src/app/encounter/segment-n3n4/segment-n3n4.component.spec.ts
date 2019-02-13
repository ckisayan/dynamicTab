import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentN3n4Component } from './segment-n3n4.component';

describe('SegmentN3n4Component', () => {
  let component: SegmentN3n4Component;
  let fixture: ComponentFixture<SegmentN3n4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentN3n4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentN3n4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
