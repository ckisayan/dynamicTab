import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SegmentRefComponent } from '../segment-ref/segment-ref.component';
import { TitleComponent } from '../title/title.component';
import { Nm1Segment } from '../entity/nm1Segment';
import { NM1_SEGMENTPROVIDER, N3N4_SEGMENTNAME, NM1_SEGMENTNAME } from '../common';

export class EncounterEditorConfig {

    private segmentTabDefault = [
        {
          segmentName: 'REF',
          component: this.getComponentLocal('REF'),
          entity: this.getEntityLocal('85', 'REF'),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
      ];
      private segmentTabPayToAddressName = [
        {
          segmentName: 'NM1',
          component: this.getComponentLocal(NM1_SEGMENTNAME),
          entity: this.getEntityLocal('87', NM1_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: N3N4_SEGMENTNAME,
          component: this.getComponentLocal(N3N4_SEGMENTNAME),
          entity: this.getEntityLocal('87', N3N4_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
      ];

      private segmentTabBillingProviderName = [
        {
          segmentName: NM1_SEGMENTNAME,
          component: this.getComponentLocal(NM1_SEGMENTNAME),
          entity: this.getEntityLocal('85', NM1_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: N3N4_SEGMENTNAME,
          component: this.getComponentLocal(''),
          entity: this.getEntityLocal('85', N3N4_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: 'REF',
          component: this.getComponentLocal('REF'),
          entity: this.getEntityLocal('85', 'REF'),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: 'PER',
          component: this.getComponentLocal(''),
          entity: this.getEntityLocal('85', 'REF'),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
      ];
      public dynamicSection2000Tabs = [
        {
            label: 'BILLING PROVIDER NAME',
            segment: this.getSegmentLocal('BillingProviderName'),
            X12Type: '837|835', // if billing provider is applicable to 835 type then specify
            TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
            label: 'PAY-TO ADDRESS NAME',
            segment: this.getSegmentLocal('PayToAddressname'),
            X12Type: '837|835',
            TypeOf837: 'Professional|Institutional|Dental'
        },
        {
            label: 'PAY-TO PLAN NAME',
            segment: this.getSegmentLocal('PayToPlanName'),
            X12Type: '837|835',
            TypeOf837: 'Professional|Institutional|Dental'
        },
        {
            label: 'SUBSCRIBER NAME',
            segment: this.getSegmentLocal('SubscriberName'),
            X12Type: '837|835',
            TypeOf837: 'Professional|Institutional|Dental'
        },
        {
            label: 'PAYER NAME',
            segment: this.getSegmentLocal('PayerName'),
            X12Type: '837|835',
            TypeOf837: 'Professional|Institutional|Dental'
        }
      ];
      public getDefaultTab() {
          return this.segmentTabDefault;
      }
      public getPayToAddressNameTab() {
        return this.segmentTabPayToAddressName;
      }
      public getBillingProviderNameTab() {
        return this.segmentTabBillingProviderName;
      }
      public getDynamicSection2000Tabs() {
        return this.dynamicSection2000Tabs;
      }
      getComponentLocal(loopId: string) {
        let outletLocal = null;
        switch (loopId) {
          case NM1_SEGMENTNAME:
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
    getEntityLocal(loopCode, segmentName) {
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

    getSegmentLocal(loopId) {
      let tabLocal = null;
      switch (loopId) {
        case 'BillingProviderName':
          tabLocal = this.segmentTabBillingProviderName;
          break;
        case 'PayToAddressname':
          tabLocal = this.segmentTabPayToAddressName;
          break;
        default:
          tabLocal =  this.segmentTabDefault;
          break;
      }
      return tabLocal;
    }
    getClassName() {
        return 'EncounterEditorConfig';
    }
}
