import { Component, OnInit, InjectionToken, Injector, ReflectiveInjector, Input, Inject, Injectable } from '@angular/core';
import { TitleComponent, TITLE} from '../title/title.component';
import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SEGMENTPROVIDER } from '../SEGMENTPROVIDER';
import { NM1_SEGMENTPROVIDER, N3N4_SEGMENTNAME } from '../common';
import {Nm1Segment} from '../entity/nm1Segment';
import { SegmentRefComponent } from '../segment-ref/segment-ref.component';

@Component({
  selector: 'app-encounter-editor',
  templateUrl: './encounter-editor.component.html',
  styleUrls: ['./encounter-editor.component.css']
})
export class EncounterEditorComponent implements OnInit {
  public segmentTabDefault = [
    {
      segmentName: 'REF',
      component: this.getComponent('REF'),
      entity: this.getEntity('85', 'REF'),
      X12Type: '837|835', // if billing provider is applicable to 835 type then specify
      TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
    },
  ];
  public segmentTabPayToAddressname = [
    {
      segmentName: 'NM1',
      component: this.getComponent('NM1'),
      entity: this.getEntity('87', 'NM1'),
      X12Type: '837|835', // if billing provider is applicable to 835 type then specify
      TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
    },
    {
      segmentName: N3N4_SEGMENTNAME,
      component: this.getComponent(N3N4_SEGMENTNAME),
      entity: this.getEntity('87', N3N4_SEGMENTNAME),
      X12Type: '837|835', // if billing provider is applicable to 835 type then specify
      TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
    },
  ];
  public segmentTabBillingProviderName = [
    {
      segmentName: 'NM1',
      component: this.getComponent('NM1'),
      entity: this.getEntity('85', 'NM1'),
      X12Type: '837|835', // if billing provider is applicable to 835 type then specify
      TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
    },
    {
      segmentName: 'N3/N4',
      component: this.getComponent(''),
      entity: this.getEntity('85', N3N4_SEGMENTNAME),
      X12Type: '837|835', // if billing provider is applicable to 835 type then specify
      TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
    },
    {
      segmentName: 'REF',
      component: this.getComponent('REF'),
      entity: this.getEntity('85', 'REF'),
      X12Type: '837|835', // if billing provider is applicable to 835 type then specify
      TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify

    },
    {
      segmentName: 'PER',
      component: this.getComponent(''),
      entity: this.getEntity('85', 'REF'),
      X12Type: '837|835', // if billing provider is applicable to 835 type then specify
      TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
    },
  ];
  public dynamicTabs = [
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

  // outlet = SegmentNm1Component;
  myInjector: Injector;
  selectedTypeOfX12: string;
  selectedTypeOf837: string;
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
  getEntity(loopCode, segmentName) {
    const nm1 = new Nm1Segment();
    nm1.segmentName = segmentName;
    nm1.loopCode = loopCode;
    nm1.X12Type = 'P'; // for pro - set from json returned from API
    switch (loopCode) {
      case '85':
        nm1.loopDisplayName = 'Loop 2010AA - Billing Provider Name';
        nm1.loopId = '2010AA';
        nm1.entityTypeQualifier = '01'; // person
        nm1.firstName = 'Chris';
        nm1.lastNameOrgName = 'Isayan';
        break;
      case '87':
        nm1.loopDisplayName = 'Loop 2010AB - Billing Provider Name';
        nm1.loopId = '2010AB';
        nm1.entityTypeQualifier = '01'; // person
        break;
      default:
        break;
    }
    // console.log(nm1);
    return nm1;
  }
  getComponent(loopId) {
    let outletLocal = null;
    switch (loopId) {
      case 'NM1':
        outletLocal =  SegmentNm1Component;
        break;
      case 'REF':
        outletLocal =  SegmentRefComponent;
        break;
      default:
        outletLocal =  TitleComponent;
        break;
    }
    return outletLocal;
  }
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
  ngOnInit() {
    // console.log(this.dynamicTabs);
    this.selectedTypeOfX12 = '837';
    this.selectedTypeOf837 = 'Professional';
  }

}

