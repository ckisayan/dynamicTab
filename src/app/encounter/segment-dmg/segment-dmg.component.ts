import { Component, OnInit, Inject } from '@angular/core';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';

@Component({
  selector: 'app-segment-dmg',
  templateUrl: './segment-dmg.component.html',
  styleUrls: ['./segment-dmg.component.css']
})
export class SegmentDmgComponent implements OnInit {

  constructor(@Inject(SEGMENTPROVIDER) private infoInjected: any) { }

  ngOnInit() {
  }

}
