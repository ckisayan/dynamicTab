import { Component, OnInit, Inject } from '@angular/core';
import { DMG_SEGMENTPROVIDER } from '../common';

@Component({
  selector: 'app-segment-dmg',
  templateUrl: './segment-dmg.component.html',
  styleUrls: ['./segment-dmg.component.css']
})
export class SegmentDmgComponent implements OnInit {

  constructor(@Inject(DMG_SEGMENTPROVIDER) private infoInjected: any) { }

  ngOnInit() {
  }
  displayElement(elementName) {
    return true;
  }
}
