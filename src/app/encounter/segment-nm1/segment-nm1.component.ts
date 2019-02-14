import { Component, OnInit, Input, Inject } from '@angular/core';
import { Nm1Segment } from '../entity/nm1Segment';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';
@Component({
  selector: 'app-segment-nm1',
  templateUrl: './segment-nm1.component.html',
  styleUrls: ['./segment-nm1.component.css']
})
export class SegmentNm1Component implements OnInit {
  // @Input() info: any;
  private pageData = new Nm1Segment();
  constructor(@Inject(SEGMENTPROVIDER) private infoInjected: any) { }

  ngOnInit() {
    // it is best to copy to local make the modifications and on exit of the page send the data back to the parent.
    if (typeof this.infoInjected !== 'undefined' && this.infoInjected !== null) {
      this.pageData = Object.assign(this.infoInjected );
    }
    console.log ( this.pageData.loopDisplayName);
  }
  DisplayField(fieldName) {
    let retVal = true;
    switch (fieldName) {
      case 'FirstName':
        // TODO:  some login
        if (this.infoInjected.loopCode === '85') {
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
