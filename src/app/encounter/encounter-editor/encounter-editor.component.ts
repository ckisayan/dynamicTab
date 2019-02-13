import { Component, OnInit, InjectionToken, Injector, ReflectiveInjector, Input, Inject, Injectable } from '@angular/core';
import { TitleComponent, TITLE} from '../title/title.component';
import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';
import { NM1_SEGMENTPROVIDER, N3N4_SEGMENTNAME } from '../common';
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

  public segmentTabDefault = this.encounterEditorConfig.getDefaultTab();
  public segmentTabPayToAddressname = this.encounterEditorConfig.getPayToAddressNameTab();
  public segmentTabBillingProviderName = this.encounterEditorConfig.getBillingProviderNameTab();

  public dynamicSection2000Tabs = [
    {
        label: 'BILLING PROVIDER NAME',
        segment: this.getSegment('BillingProviderName'),
        X12Type: '837|835', // if billing provider is applicable to 835 type then specify
        TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
    },
    {
        label: 'PAY-TO ADDRESS NAME',
        segment: this.getSegment('PayToAddressname'),
        X12Type: '837|835',
        TypeOf837: 'Professional|Institutional|Dental'
    },
    {
        label: 'PAY-TO PLAN NAME',
        segment: this.getSegment('PayToPlanName'),
        X12Type: '837|835',
        TypeOf837: 'Professional|Institutional|Dental'
    },
    {
        label: 'SUBSCRIBER NAME',
        segment: this.getSegment('SubscriberName'),
        X12Type: '837|835',
        TypeOf837: 'Professional|Institutional|Dental'
    },
    {
        label: 'PAYER NAME',
        segment: this.getSegment('PayerName'),
        X12Type: '837|835',
        TypeOf837: 'Professional|Institutional|Dental'
    }
  ];


  selectedTypeOfX12: string;
  selectedTypeOf837: string;


  constructor(private injector: Injector) {

  }
  getInjector(entity) {
    let myInjector = null;
    const segmentName = entity.segmentName;
    switch (segmentName) {
      case 'NM1':
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
  getSegment(loopId) {
    let tabLocal = null;
    switch (loopId) {
      case 'BillingProviderName':
        tabLocal = this.segmentTabBillingProviderName;
        break;
      case 'PayToAddressname':
        tabLocal = this.segmentTabPayToAddressname;
        break;
      default:
        tabLocal =  this.segmentTabDefault;
        break;
    }
    return tabLocal;
  }
  getTabs(X12Type) {

  }
  ngOnInit() {
    // console.log(this.dynamicTabs);
    this.selectedTypeOfX12 = '837';
    this.selectedTypeOf837 = 'Professional';
  }

}

