import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Speaker } from 'src/app/_module/speaker';

@Component({
  selector: 'app-addspeaker',
  templateUrl: './addspeaker.component.html',
  styleUrls: ['./addspeaker.component.css'],
})
export class AddspeakerComponent implements OnInit {
  @Output() addSpeaker: EventEmitter<Speaker> = new EventEmitter<Speaker>();
  @Input() showSpeakerForm: boolean = true;
  newSpeaker: Speaker = new Speaker(0, '', '', '', 1);

  saveNewSpeaker() {
    this.addSpeaker.emit(
      new Speaker(
        this.newSpeaker.id,
        this.newSpeaker.name,
        this.newSpeaker.address,
        this.newSpeaker.image,
        this.newSpeaker.rate
      )
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
