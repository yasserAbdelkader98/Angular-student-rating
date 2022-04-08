import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerlistComponent } from './speakerlist/speakerlist.component';
import { AddspeakerComponent } from './addspeaker/addspeaker.component';
import { SpeakerdetailsComponent } from './speakerdetails/speakerdetails.component';
import { EditspeakerComponent } from './editspeaker/editspeaker.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StringConvertPipe } from './string-convert.pipe';
import { HighlightDirective } from './highlight.directive';
import { PowerToX } from './powerToX.pipe';

@NgModule({
  declarations: [
    SpeakerlistComponent,
    AddspeakerComponent,
    SpeakerdetailsComponent,
    EditspeakerComponent,
    StringConvertPipe,
    HighlightDirective,
    PowerToX,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    SpeakerlistComponent,
    AddspeakerComponent,
    SpeakerdetailsComponent,
    EditspeakerComponent,
  ],
})
export class SpeakerModule {}
