import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncounterComponent } from './encounter/encounter.component';
import { EncounterEditorComponent} from './encounter/encounter-editor/encounter-editor.component';
import { TitleComponent, TITLE } from './encounter/title/title.component';
import { SegmentNm1Component } from './encounter/segment-nm1/segment-nm1.component';
import { SEGMENTPROVIDER } from './encounter/SEGMENTPROVIDER';
import { SegmentRefComponent } from './encounter/segment-ref/segment-ref.component';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

import { SegmentN3N4Component } from './encounter/segment-n3n4/segment-n3n4.component';
import { SegmentPerComponent } from './encounter/segment-per/segment-per.component';
import { SegmentDmgComponent } from './encounter/segment-dmg/segment-dmg.component';
import { DMG_SEGMENTPROVIDER } from './encounter/common';

import {FieldsetModule} from 'primeng/fieldset';
import { SegmentPwkComponent } from './encounter/segment-pwk/segment-pwk.component';



@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent,
    EncounterEditorComponent,
    TitleComponent,
    SegmentNm1Component,
    SegmentRefComponent,
    SegmentN3N4Component,
    SegmentPerComponent,
    SegmentDmgComponent,
    SegmentPwkComponent,


  ],
  entryComponents: [TitleComponent, SegmentNm1Component, SegmentRefComponent, SegmentN3N4Component,
    SegmentPerComponent, SegmentDmgComponent, SegmentPwkComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    RadioButtonModule,
    FormsModule,
    FieldsetModule

  ],
  providers: [ { provide: TITLE, useValue: '' },
    { provide: SEGMENTPROVIDER, useValue: '' },
    { provide: DMG_SEGMENTPROVIDER, useValue: '' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
