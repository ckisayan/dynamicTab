import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentPerComponent } from './segment-per.component';

describe('SegmentPerComponent', () => {
  let component: SegmentPerComponent;
  let fixture: ComponentFixture<SegmentPerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentPerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
