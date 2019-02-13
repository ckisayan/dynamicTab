import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentDmgComponent } from './segment-dmg.component';

describe('SegmentDmgComponent', () => {
  let component: SegmentDmgComponent;
  let fixture: ComponentFixture<SegmentDmgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentDmgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentDmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
