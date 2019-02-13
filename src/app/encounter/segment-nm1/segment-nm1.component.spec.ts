import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentNm1Component } from './segment-nm1.component';

describe('SegmentNm1Component', () => {
  let component: SegmentNm1Component;
  let fixture: ComponentFixture<SegmentNm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentNm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentNm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
