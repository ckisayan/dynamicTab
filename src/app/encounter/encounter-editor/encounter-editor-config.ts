import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SegmentRefComponent } from '../segment-ref/segment-ref.component';
import { TitleComponent } from '../title/title.component';
import { Nm1Segment } from '../entity/nm1Segment';
import { NM1_SEGMENTPROVIDER, N3N4_SEGMENTNAME, NM1_SEGMENTNAME, REF_SEGMENTNAME, PER_SEGMENTNAME, DMG_SEGMENTNAME,
  BILLINGPROVIDERNAME_LOOP, PAYTOADDRESSNAME_LOOP, PAYTOPLANNAME_LOOP, SUBSCRIBERNAME_LOOP, PAYERNAME_LOOP } from '../common';
import { SegmentN3N4Component } from '../segment-n3n4/segment-n3n4.component';
import { SegmentPerComponent } from '../segment-per/segment-per.component';
import { SegmentDmgComponent } from '../segment-dmg/segment-dmg.component';
import { DefaultSegment } from '../entity/defaultSegment';

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
      private segmentTabPayerName = [
        {
          segmentName: 'NM1',
          component: this.getComponentLocal(NM1_SEGMENTNAME),
          entity: this.getEntityLocal('PR', NM1_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: N3N4_SEGMENTNAME,
          component: this.getComponentLocal(N3N4_SEGMENTNAME),
          entity: this.getEntityLocal('PR', N3N4_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: REF_SEGMENTNAME,
          component: this.getComponentLocal(REF_SEGMENTNAME),
          entity: this.getEntityLocal('PR', REF_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
      ];
      private segmentTabSubscriberName = [
        {
          segmentName: 'NM1',
          component: this.getComponentLocal(NM1_SEGMENTNAME),
          entity: this.getEntityLocal('IL', NM1_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: N3N4_SEGMENTNAME,
          component: this.getComponentLocal(N3N4_SEGMENTNAME),
          entity: this.getEntityLocal('IL', N3N4_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: DMG_SEGMENTNAME,
          component: this.getComponentLocal(DMG_SEGMENTNAME),
          entity: this.getEntityLocal('IL', DMG_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: REF_SEGMENTNAME,
          component: this.getComponentLocal(REF_SEGMENTNAME),
          entity: this.getEntityLocal('IL', REF_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: PER_SEGMENTNAME,
          component: this.getComponentLocal(PER_SEGMENTNAME),
          entity: this.getEntityLocal('IL', PER_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
      ];

      private segmentTabPayToPlanName = [
        {
          segmentName: 'NM1',
          component: this.getComponentLocal(NM1_SEGMENTNAME),
          entity: this.getEntityLocal('PE', NM1_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: N3N4_SEGMENTNAME,
          component: this.getComponentLocal(N3N4_SEGMENTNAME),
          entity: this.getEntityLocal('PE', N3N4_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: REF_SEGMENTNAME,
          component: this.getComponentLocal(REF_SEGMENTNAME),
          entity: this.getEntityLocal('PE', REF_SEGMENTNAME),
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
          component: this.getComponentLocal(N3N4_SEGMENTNAME),
          entity: this.getEntityLocal('85', N3N4_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: REF_SEGMENTNAME,
          component: this.getComponentLocal(REF_SEGMENTNAME),
          entity: this.getEntityLocal('85', REF_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
          segmentName: PER_SEGMENTNAME,
          component: this.getComponentLocal(PER_SEGMENTNAME),
          entity: this.getEntityLocal('85', PER_SEGMENTNAME),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
      ];
      public dynamicSection2000Tabs = [
        {
            label: 'BILLING PROVIDER NAME',
            segment: this.getSegmentLocal(BILLINGPROVIDERNAME_LOOP),
            X12Type: '837|835', // if billing provider is applicable to 835 type then specify
            TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
            label: 'PAY-TO ADDRESS NAME',
            segment: this.getSegmentLocal(PAYTOADDRESSNAME_LOOP),
            X12Type: '837|835',
            TypeOf837: 'Professional|Institutional|Dental'
        },
        {
            label: 'PAY-TO PLAN NAME',
            segment: this.getSegmentLocal(PAYTOPLANNAME_LOOP),
            X12Type: '837|835',
            TypeOf837: 'Professional|Institutional|Dental'
        },
        {
            label: 'SUBSCRIBER NAME',
            segment: this.getSegmentLocal(SUBSCRIBERNAME_LOOP),
            X12Type: '837|835',
            TypeOf837: 'Professional|Institutional|Dental'
        },
        {
            label: 'PAYER NAME',
            segment: this.getSegmentLocal(PAYERNAME_LOOP),
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
          case N3N4_SEGMENTNAME:
            outletLocal =  SegmentN3N4Component;
            break;
          case REF_SEGMENTNAME:
            outletLocal =  SegmentRefComponent;
            break;
          case PER_SEGMENTNAME:
            outletLocal =  SegmentPerComponent;
            break;
        case DMG_SEGMENTNAME:
            outletLocal =  SegmentDmgComponent;
            break;
        default:
            outletLocal =  TitleComponent;
            break;
        }
        return outletLocal;
    }
    getEntityGeneric(loopCode) {
        const entitylocal = new DefaultSegment();

        entitylocal.X12Type = '837';
        entitylocal.loopCode = loopCode;
        entitylocal.X12Type = 'P';
        entitylocal.loopDisplayName = 'Loop Generic';
        entitylocal.loopId = '2Generic';
        entitylocal.segmentName = 'Generic';
        return entitylocal;
    }
    getEntityNM1(loopCode) {
        const nm1 = new Nm1Segment();
        nm1.segmentName = NM1_SEGMENTNAME;
        nm1.loopCode = loopCode;
        nm1.X12Type = 'P'; // for pro - set from json returned from API
        switch (loopCode) {
        case '85':
            // there will be a service that gets the data from store and populates below.
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
            nm1.loopDisplayName = 'Loop 2010AA - Billing Provider Name';
            nm1.loopId = '2010AA';
            nm1.entityTypeQualifier = '01'; // person
            nm1.firstName = 'Chris';
            nm1.lastNameOrgName = 'Isayan';
            break;
        }
        return nm1;
    }
    getEntityLocal(loopCode, segmentName) {
        let entityGeneric = null;
        switch (segmentName) {
            case NM1_SEGMENTNAME:
                entityGeneric = this.getEntityNM1(loopCode);
                break;
            // case DMG_SEGMENTNAME:
            //    break;
            default:
                // DefaultSegment;
                entityGeneric = this.getEntityGeneric(loopCode);
                break;
        }
        return entityGeneric;
    }

    getSegmentLocal(loopId) {
      let tabLocal = null;
      switch (loopId) {
        case BILLINGPROVIDERNAME_LOOP:
          tabLocal = this.segmentTabBillingProviderName;
          break;
        case PAYTOADDRESSNAME_LOOP:
          tabLocal = this.segmentTabPayToAddressName;
          break;
        case PAYTOPLANNAME_LOOP:
          tabLocal = this.segmentTabPayToPlanName;
          break;
        case SUBSCRIBERNAME_LOOP:
          tabLocal = this.segmentTabSubscriberName;
          break;
        case PAYERNAME_LOOP:
          tabLocal = this.segmentTabPayerName;
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
