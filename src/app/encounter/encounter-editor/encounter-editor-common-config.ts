import { Nm1Segment } from '../entity/nm1Segment';
import { NM1_SEGMENTNAME, N3N4_SEGMENTNAME, PWK_SEGMENTNAME } from '../common';
import { Injector } from '@angular/core';
import { SegmentN3N4Component } from '../segment-n3n4/segment-n3n4.component';
import { SegmentNm1Component } from '../segment-nm1/segment-nm1.component';
import { SegmentPwkComponent } from '../segment-pwk/segment-pwk.component';

export abstract class EncounterEditorCommonConfig {
    constructor(public injector: Injector) {
        // console.log (injector);
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
            case '100':
                // there will be a service that gets the data from store and populates below.
                nm1.loopDisplayName = 'Loop 2010AA - Billing Provider Name';
                nm1.loopId = '2010AA';
                nm1.entityTypeQualifier = '01'; // person
                nm1.firstName = 'Chris';
                nm1.lastNameOrgName = 'Isayan';
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
    getComponentLocal(loopId: string) {
        let outletLocal = null;
        switch (loopId) {
          case NM1_SEGMENTNAME:
            outletLocal =  SegmentNm1Component;
            break;
          case N3N4_SEGMENTNAME:
            outletLocal =  SegmentN3N4Component;
            break;
        case PWK_SEGMENTNAME:
            outletLocal =  SegmentPwkComponent;
            break;
        default:
            outletLocal =  SegmentNm1Component;
            break;
        }
        return outletLocal;
    }
}
