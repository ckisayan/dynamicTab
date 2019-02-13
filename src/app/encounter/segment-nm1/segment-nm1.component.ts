import { Component, OnInit, Input, Inject, InjectionToken } from '@angular/core';
import { Nm1Segment } from '../entity/nm1Segment';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';
export const SEGMENTPROVIDER = new InjectionToken<string>('app.segment');
@Component({
  selector: 'app-segment-nm1',
  templateUrl: './segment-nm1.component.html',
  styleUrls: ['./segment-nm1.component.css']
})
export class SegmentNm1Component implements OnInit {
  @Input() info: any;
  constructor(@Inject(SEGMENTPROVIDER) private infoInjected: any) { }

  ngOnInit() {
    // console.log('inside nm1');
    // this.info = this.infoInjected as (Nm1Segment);
    this.info = this.infoInjected;
    console.log ('inside segmentNm1.' + this.info.firstName);
  }

}
