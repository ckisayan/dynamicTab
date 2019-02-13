import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncounterComponent } from './encounter/encounter.component';
import { EncounterEditorComponent} from './encounter/encounter-editor/encounter-editor.component';
import { TitleComponent, TITLE } from './encounter/title/title.component';
import { SegmentNm1Component, SEGMENTPROVIDER } from './encounter/segment-nm1/segment-nm1.component';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { NM1_SEGMENTPROVIDER} from './encounter/common';
import { Nm1Segment } from './encounter/entity/nm1Segment';

@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent,
    EncounterEditorComponent,
    TitleComponent,
    SegmentNm1Component
  ],
  entryComponents: [TitleComponent, SegmentNm1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    RadioButtonModule,
    FormsModule
  ],
  providers: [ { provide: TITLE, useValue: '' }, { provide: SEGMENTPROVIDER, useValue: '' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
