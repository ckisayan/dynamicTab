import { Component, OnInit, InjectionToken, Injector, ReflectiveInjector, Input, Inject, Injectable } from '@angular/core';
import { TitleComponent, TITLE} from '../title/title.component';
import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';
import { NM1_SEGMENTPROVIDER, N3N4_SEGMENTNAME, NM1_SEGMENTNAME, DMG_SEGMENTNAME, DMG_SEGMENTPROVIDER } from '../common';
import {Nm1Segment} from '../entity/nm1Segment';
import { SegmentRefComponent } from '../segment-ref/segment-ref.component';
import {EncounterEditorProviderConfig} from './encounter-editor-provider-config';
import { EncounterEditorClaimConfig, CLM_SEGMENTNAME } from './encounter-editor-claim-config';
import { PwkSegment } from '../entity/pwkSegment';
import { DmgSegment } from '../entity/dmgSegment';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Component({
  selector: 'app-encounter-editor',
  templateUrl: './encounter-editor.component.html',
  styleUrls: ['./encounter-editor.component.css']
})
export class EncounterEditorComponent implements OnInit {

  private encounterEditorConfig = new EncounterEditorProviderConfig(this.injector);
  private encounterEditorClaimConfig = new EncounterEditorClaimConfig(this.injector);
  public dynamicSection2000Tabs = this.encounterEditorConfig.getDynamicSection2000Tabs();
  public dynamicSection2300Tabs = this.encounterEditorClaimConfig.getDynamicSection2300Tabs();


  selectedTypeOfX12: string;
  selectedTypeOf837: string;
  public currentActiveIndex = 0 ;
  constructor(private injector: Injector) {
  }
  getTabs(X12Type) {

  }
  ngOnInit() {
    // console.log(this.dynamicTabs);
    this.selectedTypeOfX12 = '837';
    this.selectedTypeOf837 = 'Professional';
  }
  handleChange(e) {
    console.log ('ChangeEvent: current index is: ' + this.currentActiveIndex);
    console.log ('ChangeEvent: change to index is: ' + e.index);
    this.currentActiveIndex = e.index;

  }

  handleClose(e) {
    console.log ('CloseEvent: current index is: ' + this.currentActiveIndex);
    console.log ('CloseEvent: change to index is: ' + e.index);
    this.currentActiveIndex = e.index;

  }
}

