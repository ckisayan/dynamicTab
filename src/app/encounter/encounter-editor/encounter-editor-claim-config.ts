import { SegmentPwkComponent } from '../segment-pwk/segment-pwk.component';
import { PwkSegment } from '../entity/pwkSegment';
import { DefaultSegment } from '../entity/defaultSegment';
import { Injector } from '@angular/core';
import { NM1_SEGMENTNAME, N3N4_SEGMENTNAME, PWK_SEGMENTNAME } from '../common';
import { EncounterEditorCommonConfig } from './encounter-editor-common-config';

export const CLM_SEGMENTNAME = 'CLM';
export const COB_LOOPNAME = 'COB';
export const LOOPSEGMENTENUM_SEGMENT = 'SEGMENT';
export const LOOPSEGMENTENUM_LOOP = 'LOOP';

export class EncounterEditorClaimConfig extends EncounterEditorCommonConfig {

    private segmentPWKName = [
        {
          segmentName: NM1_SEGMENTNAME,
          component: this.getComponentLocal(NM1_SEGMENTNAME),
          injector: this.getInjector2300(this.getEntityLocal('100', NM1_SEGMENTNAME)),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
    ];
    private segment2300COB = [
        {
          segmentName: NM1_SEGMENTNAME,
          component: this.getComponentLocal(NM1_SEGMENTNAME),
          injector: this.getInjector2300(this.getEntityLocal('NM1', NM1_SEGMENTNAME)),
          X12Type: '837|835', // if billing provider is applicable to 835 type then specify
          TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
            segmentName: N3N4_SEGMENTNAME,
            component: this.getComponentLocal(N3N4_SEGMENTNAME),
            injector: this.getInjector2300(this.getEntityLocal('IL', N3N4_SEGMENTNAME)),
            X12Type: '837|835', // if billing provider is applicable to 835 type then specify
            TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
          },
    ];


    public dynamicSection2300Tabs = [
        {
            label: PWK_SEGMENTNAME,
            segment: this.segmentPWKName,
            isLoopOrSegment: LOOPSEGMENTENUM_LOOP, // this.getLoopOrSegment(PWK_SEGMENTNAME),
            component: this.getComponentLocal(PWK_SEGMENTNAME),
            injector: this.getInjector2300(this.getEntityLocal('100', PWK_SEGMENTNAME)),
            X12Type: '837|835', // if billing provider is applicable to 835 type then specify
            TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
        {
            label: COB_LOOPNAME,
            segment: this.getSegmentLocal(COB_LOOPNAME), // this.getSegmentLocal(PWK_SEGMENTNAME),
            isLoopOrSegment: LOOPSEGMENTENUM_SEGMENT, // this.getLoopOrSegment(PWK_SEGMENTNAME),
            X12Type: '837|835', // if billing provider is applicable to 835 type then specify
            TypeOf837: 'Professional|Institutional|Dental' // if billing provider is applicable to 837 type then specify
        },
    ];

    getEntityLocal(loopCode, segmentName) {
        let entityGeneric = null;
        switch (segmentName) {
            case PWK_SEGMENTNAME:
                entityGeneric = this.getEntityPWK(loopCode);
                break;
            case NM1_SEGMENTNAME:
                entityGeneric = this.getEntityNM1(loopCode);
                break;
            // case DMG_SEGMENTNAME:
            //    break;
            default:
                // DefaultSegment;
                entityGeneric = this.getEntityGeneric(loopCode, segmentName);
                // console.log(segmentName);
                break;
        }
        return entityGeneric;
    }
    getEntityPWK(loopCode) {

        const pwk = new PwkSegment();
        pwk.segmentName = PWK_SEGMENTNAME;
        pwk.loopCode = loopCode;
        pwk.X12Type = 'P'; // for pro - set from json returned from API
        switch (loopCode) {
        case '85':

            break;
        case '87':

            break;
        default:
            // there will be a service that gets the data from store and populates below.
            pwk.loopDisplayName = 'PWK segment';
            pwk.loopId = '2010AA';
            break;
        }
        return pwk;

    }
    public getDynamicSection2300Tabs() {
        return this.dynamicSection2300Tabs;
    }

    getSegmentLocal(loopId) {
        let tabLocal = null;
        switch (loopId) {
          case COB_LOOPNAME:
            tabLocal = this.segment2300COB;
            break;
        default:
            break;
        }
        return tabLocal;
    }
     /*
    getSegmentLocal(loopId) {
        let segmentElement = null;
        switch (loopId) {
            case PWK_SEGMENTNAME:
                segmentElement = this.segmentPWKName;
                break;
            case NM1_SEGMENTNAME:
                segmentElement = this.segment2300COB;
                break;
            default:
                break;
        }
        return segmentElement;
    }
    */
    getLoopOrSegment(tabName) {
        let loopOrSegment = LOOPSEGMENTENUM_SEGMENT;
        switch (tabName) {
            case CLM_SEGMENTNAME:
            case PWK_SEGMENTNAME:
                loopOrSegment = LOOPSEGMENTENUM_SEGMENT;
                break;
            default:
                loopOrSegment = LOOPSEGMENTENUM_SEGMENT;
                break;
        }
        return loopOrSegment;
    }

    getEntityGeneric(loopCode, segmentName) {
        const entitylocal = new DefaultSegment();
        entitylocal.segmentName = segmentName;
        entitylocal.X12Type = '837';
        entitylocal.loopCode = loopCode;
        entitylocal.X12Type = 'P';
        entitylocal.loopDisplayName = 'Loop Generic';
        entitylocal.loopId = '2Generic';
        return entitylocal;
    }
    getInjector2300(entity) {
        let myInjector = null;
        const segmentName = entity.segmentName;
        // console.log ('inside injector code');
        switch (segmentName) {
          case PWK_SEGMENTNAME:
            entity.loopDisplayName = 'this is a test';
            myInjector =  Injector.create({providers: [{provide: PwkSegment, useValue: entity, deps: []}], parent: this.injector});
            break;
          default:
            entity.loopDisplayName = 'this is a test default';
            myInjector =  Injector.create({providers: [{provide: PwkSegment, useValue: entity, deps: []}], parent: this.injector});
            break;
        }
        return myInjector;
      }
}
