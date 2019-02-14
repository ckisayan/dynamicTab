import { InjectionToken } from '@angular/core';
import { Nm1Segment } from './entity/nm1Segment';



export const NM1_SEGMENTPROVIDER = new InjectionToken<Nm1Segment>('nm1.segment');
export const N3N4_SEGMENTNAME = 'N3/N4';
export const NM1_SEGMENTNAME = 'NM1';
export const REF_SEGMENTNAME = 'REF';
export const PER_SEGMENTNAME = 'PER';
export const DMG_SEGMENTNAME = 'DMG';
export const BILLINGPROVIDERNAME_LOOP = 'BillingProviderName';
export const PAYTOADDRESSNAME_LOOP = 'PayToAddressName';
export const PAYTOPLANNAME_LOOP = 'PayToPlanName';
export const SUBSCRIBERNAME_LOOP = 'SubscriberName';
export const PAYERNAME_LOOP = 'PayerName';

export const BILLINGPROVIDER_LOOPCODE = '85';
export const PAYTOPROVIDER_LOOPCODE = '87';
export const PAYEE_LOOPCODE = 'PE';
export const SUBSCRIBER_LOOPCODE = 'IL';
export const PAYERNAME_LOOPCODE = 'PR';
