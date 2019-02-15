import { Component, OnInit } from '@angular/core';
import { PwkSegment } from '../entity/pwkSegment';

@Component({
  selector: 'app-segment-pwk',
  templateUrl: './segment-pwk.component.html',
  styleUrls: ['./segment-pwk.component.css']
})
export class SegmentPwkComponent implements OnInit {

  constructor(public pwkSegment: PwkSegment) { }

  ngOnInit() {
    // console.log('segment pwk initialized.');
    // console.log(this.pwkSegment);
  }

}
