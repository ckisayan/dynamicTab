import { Component, OnInit, InjectionToken, Inject, Input } from '@angular/core';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';


@Component({
  selector: 'app-segment-ref',
  templateUrl: './segment-ref.component.html',
  styleUrls: ['./segment-ref.component.css']
})
export class SegmentRefComponent implements OnInit {
  // @Input() info: any;
  constructor(@Inject(SEGMENTPROVIDER) private infoInjected: any) { }

  ngOnInit() {
    // console.log(this.infoInjected);
  }

}
