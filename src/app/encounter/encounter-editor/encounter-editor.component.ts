import { Component, OnInit, InjectionToken, Injector, ReflectiveInjector, Input, Inject, Injectable } from '@angular/core';
import { TitleComponent, TITLE} from '../title/title.component';
import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';
import { NM1_SEGMENTPROVIDER, N3N4_SEGMENTNAME, NM1_SEGMENTNAME } from '../common';
import {Nm1Segment} from '../entity/nm1Segment';
import { SegmentRefComponent } from '../segment-ref/segment-ref.component';
import {EncounterEditorConfig} from './encounter-editor-config';
@Component({
  selector: 'app-encounter-editor',
  templateUrl: './encounter-editor.component.html',
  styleUrls: ['./encounter-editor.component.css']
})
export class EncounterEditorComponent implements OnInit {

  private encounterEditorConfig = new EncounterEditorConfig();

  // public segmentTabDefault = this.encounterEditorConfig.getDefaultTab();
  // public segmentTabPayToAddressName = this.encounterEditorConfig.getPayToAddressNameTab();
  // public segmentTabBillingProviderName = this.encounterEditorConfig.getBillingProviderNameTab();
  public dynamicSection2000Tabs = this.encounterEditorConfig.getDynamicSection2000Tabs();

  selectedTypeOfX12: string;
  selectedTypeOf837: string;

  constructor(private injector: Injector) {

  }
  getInjector(entity) {
    let myInjector = null;
    const segmentName = entity.segmentName;
    switch (segmentName) {
      case NM1_SEGMENTNAME:
        // title = 'this comes from parent! custom for: ' + segmentName;
        // console.log ('inside nm1' + segmentName);
        myInjector =  ReflectiveInjector.resolveAndCreate([{ provide: SEGMENTPROVIDER, useValue: entity }], this.injector);
        break;
      default:
        myInjector =  ReflectiveInjector.resolveAndCreate([{ provide: TitleComponent, useValue: '' }], this.injector);
        break;
    }
    return myInjector;
  }

  getTabs(X12Type) {

  }
  ngOnInit() {
    // console.log(this.dynamicTabs);
    this.selectedTypeOfX12 = '837';
    this.selectedTypeOf837 = 'Professional';
  }

}

