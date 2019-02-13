import { Component, OnInit, Inject } from '@angular/core';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';

@Component({
  selector: 'app-segment-n3n4',
  templateUrl: './segment-n3n4.component.html',
  styleUrls: ['./segment-n3n4.component.css']
})
export class SegmentN3N4Component implements OnInit {

  constructor(@Inject(SEGMENTPROVIDER) private infoInjected: any) { }

  ngOnInit() {
  }

}
