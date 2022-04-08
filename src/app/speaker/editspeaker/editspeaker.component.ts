import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Speaker } from 'src/app/_module/speaker';

@Component({
  selector: 'app-editspeaker',
  templateUrl: './editspeaker.component.html',
  styleUrls: ['./editspeaker.component.css'],
})
export class EditspeakerComponent implements OnInit {
  @Input() newSpeaker: Speaker = new Speaker(0, '', '', '', 0);
  @Input() showEditForm: boolean = true;
  // editSpeaker: Speaker = new Speaker(0, '', '', '', 0);
  // @Output() exportEdited: EventEmitter<Speaker> = new EventEmitter<Speaker>();

  confirmEdit() {
    // this.exportEdited.emit((this.editSpeaker));
    this.showEditForm = !this.showEditForm;
  }

  constructor() {}

  ngOnInit(): void {}
}
