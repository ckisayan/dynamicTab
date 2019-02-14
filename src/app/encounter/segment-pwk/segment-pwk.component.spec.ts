import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentPwkComponent } from './segment-pwk.component';

describe('SegmentPwkComponent', () => {
  let component: SegmentPwkComponent;
  let fixture: ComponentFixture<SegmentPwkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentPwkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentPwkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
