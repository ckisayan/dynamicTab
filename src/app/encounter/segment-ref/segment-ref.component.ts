import { Component, OnInit, InjectionToken, Inject, Input } from '@angular/core';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';
import { RefSegment, RefSegmentCol } from '../entity/refSegment';


@Component({
  selector: 'app-segment-ref',
  templateUrl: './segment-ref.component.html',
  styleUrls: ['./segment-ref.component.css']
})
export class SegmentRefComponent implements OnInit {
  private pageData = new RefSegmentCol();
  constructor(public refSegmentCol: RefSegmentCol) {
    console.log(refSegmentCol);
    if (typeof this.refSegmentCol !== 'undefined' && this.refSegmentCol !== null) {
      this.pageData = Object.assign(this.refSegmentCol );
    }
  }
  displayElement(elementName) {
    return true;
  }
  ngOnInit() {
  }

}
