import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SegmentRefComponent } from '../segment-ref/segment-ref.component';
import { TitleComponent } from '../title/title.component';
import { Nm1Segment } from '../entity/nm1Segment';

export class EncounterEditorConfig {

    public segmentTabDefault = [
        {
          segmentName: 'REF',
          component: this.getComponentLocal('REF'),
          entity: this.getEntityLocal('85', 'REF'),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
      ];
      public getDefaultTab() {
          return this.segmentTabDefault;
      }
      getComponentLocal(loopId) {
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
    getClassName() {
        return 'EncounterEditorConfig';
    }
}
