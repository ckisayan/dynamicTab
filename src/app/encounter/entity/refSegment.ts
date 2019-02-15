import {BaseSegment} from './baseSegment';
import { REF_SEGMENTNAME } from '../common';

export class RefSegment extends BaseSegment {
  reportTypeCode: string;
}

export class RefSegmentCol {
    segmentName = REF_SEGMENTNAME;
    TaxIdentifier: RefSegment;
    UpnLicenseInformation: RefSegment[];
}
