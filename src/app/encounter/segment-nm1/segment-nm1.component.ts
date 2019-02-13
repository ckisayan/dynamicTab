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
  constructor(@Inject(SEGMENTPROVIDER) private infoInjected: any) { }

  ngOnInit() {
    // console.log('inside nm1');
    // this.info = this.infoInjected as (Nm1Segment);
    // this.info = this.infoInjected;
    // console.log ('inside segmentNm1.');
    console.log ('inside segmentNm1.' + this.infoInjected.loopDisplayName);
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
