import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentRefComponent } from './segment-ref.component';

describe('SegmentRefComponent', () => {
  let component: SegmentRefComponent;
  let fixture: ComponentFixture<SegmentRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
