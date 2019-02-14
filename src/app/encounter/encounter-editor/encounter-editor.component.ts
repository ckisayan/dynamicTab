import { Component, OnInit, InjectionToken, Injector, ReflectiveInjector, Input, Inject, Injectable } from '@angular/core';
import { TitleComponent, TITLE} from '../title/title.component';
import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';
import { NM1_SEGMENTPROVIDER, N3N4_SEGMENTNAME, NM1_SEGMENTNAME, DMG_SEGMENTNAME, DMG_SEGMENTPROVIDER } from '../common';
import {Nm1Segment} from '../entity/nm1Segment';
import { SegmentRefComponent } from '../segment-ref/segment-ref.component';
import {EncounterEditorConfig} from './encounter-editor-config';
import { EncounterEditorClaimConfig, PWK_SEGMENTNAME } from './encounter-editor-claim-config';
import { PwkSegment } from '../entity/pwkSegment';
import { DmgSegment } from '../entity/dmgSegment';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Component({
  selector: 'app-encounter-editor',
  templateUrl: './encounter-editor.component.html',
  styleUrls: ['./encounter-editor.component.css']
})
export class EncounterEditorComponent implements OnInit {

  private encounterEditorConfig = new EncounterEditorConfig(this.injector);
  private encounterEditorClaimConfig = new EncounterEditorClaimConfig(this.injector);
  // public segmentTabDefault = this.encounterEditorConfig.getDefaultTab();
  // public segmentTabPayToAddressName = this.encounterEditorConfig.getPayToAddressNameTab();
  // public segmentTabBillingProviderName = this.encounterEditorConfig.getBillingProviderNameTab();
  public dynamicSection2000Tabs = this.encounterEditorConfig.getDynamicSection2000Tabs();
  public dynamicSection2300Tabs = this.encounterEditorClaimConfig.getDynamicSection2300Tabs();


  selectedTypeOfX12: string;
  selectedTypeOf837: string;
  myPwkInjector: Injector;
  constructor(private injector: Injector) {
    // const pwkSegment = new PwkSegment();
    // pwkSegment.loopDisplayName = 'this is a test';
    // this.myPwkInjector =  Injector.create({providers: [{provide: PwkSegment, useValue: pwkSegment, deps: []}], parent: injector});
  }
  getInjector2300(entity) {
    let myInjector = null;
    const segmentName = entity.segmentName;
    console.log ('inside injector code');
    switch (segmentName) {
      case PWK_SEGMENTNAME:
        // entity.loopDisplayName = 'this is a test';
        // myInjector =  Injector.create({providers: [{provide: PwkSegment, useValue: entity, deps: []}], parent: this.injector});

        break;
      default:
        entity.loopDisplayName = 'this is a test default';
        myInjector =  Injector.create({providers: [{provide: PwkSegment, useValue: entity, deps: []}], parent: this.injector});
        break;
    }
    return myInjector;
  }
  getInjector(entity) {
    let myInjector = null;
    const segmentName = entity.segmentName;

    switch (segmentName) {
      case NM1_SEGMENTNAME:
        // title = 'this comes from parent! custom for: ' + segmentName;
        // console.log ('inside nm1' + segmentName);
        myInjector =  Injector.create({providers: [{provide: Nm1Segment, useValue: entity, deps: []}], parent: this.injector});
        break;
      case DMG_SEGMENTNAME:
        // console.log(segmentName);
        myInjector =  Injector.create({providers: [{provide: DmgSegment, useValue: entity, deps: []}], parent: this.injector});
        break;
      default:
        myInjector =  Injector.create({providers: [{provide: TitleComponent, useValue: entity, deps: []}], parent: this.injector});
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

