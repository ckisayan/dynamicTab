import { Component, OnInit, Input, Inject } from '@angular/core';
import { Nm1Segment } from '../entity/nm1Segment';
// import { InternalFormsSharedModule } from '@angular/forms/src/directives';
// import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';

declare let window: any;
@Component({
  selector: 'app-segment-nm1',
  templateUrl: './segment-nm1.component.html',
  styleUrls: ['./segment-nm1.component.css']
})
export class SegmentNm1Component implements OnInit {
  // @Input() info: any;
  private pageData = new Nm1Segment();
  constructor(public nm1Segment: Nm1Segment) { }

  ngOnInit() {
    window.my = window.my || {};
    // it is best to copy to local make the modifications and on exit of the page send the data back to the parent.
    if (typeof this.nm1Segment !== 'undefined' && this.nm1Segment !== null) {
      this.pageData = Object.assign(this.nm1Segment );
    }
    window.addEventListener('beforeunload', function(e: any){
      this.saveChanges();
    });
    // console.log ( this.pageData.loopDisplayName);
  }
  saveChanges() {
    console.log('saving changes');
  }
  displayElement(elementName) {
    let retVal = true;
    switch (elementName) {
      case 'FirstName':
        // TODO:  some logic
        if (this.nm1Segment.loopCode === '85') {
          retVal = true;
        } else {
          retVal = false;
        }
        break;
      default:
        retVal = true;
        break;
    }
    return retVal;
  }
}
