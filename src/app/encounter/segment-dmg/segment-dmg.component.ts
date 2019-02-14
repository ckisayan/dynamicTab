import { Component, OnInit, Inject } from '@angular/core';
import { DMG_SEGMENTPROVIDER } from '../common';
import { DmgSegment } from '../entity/dmgSegment';

@Component({
  selector: 'app-segment-dmg',
  templateUrl: './segment-dmg.component.html',
  styleUrls: ['./segment-dmg.component.css']
})
export class SegmentDmgComponent implements OnInit {

  constructor(public dmgSegment: DmgSegment) { }

  ngOnInit() {
    console.log ( this.dmgSegment.loopDisplayName);
  }

  displayElement(elementName) {
    return true;
  }
}
