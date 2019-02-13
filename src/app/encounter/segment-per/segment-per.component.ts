import { Component, OnInit, Inject } from '@angular/core';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';

@Component({
  selector: 'app-segment-per',
  templateUrl: './segment-per.component.html',
  styleUrls: ['./segment-per.component.css']
})
export class SegmentPerComponent implements OnInit {

  constructor(@Inject(SEGMENTPROVIDER) private infoInjected: any) { }

  ngOnInit() {
  }

}
