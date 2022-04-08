import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_module/speaker';

@Component({
  selector: 'app-speakerdetails',
  templateUrl: './speakerdetails.component.html',
  styleUrls: ['./speakerdetails.component.css'],
})
export class SpeakerdetailsComponent implements OnInit {
  @Input() speaker = new Speaker(0, '', '', '', 5);
  @Input() isdetails: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
