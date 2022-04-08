import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_module/speaker';

@Component({
  selector: 'app-speakerlist',
  templateUrl: './speakerlist.component.html',
  styleUrls: ['./speakerlist.component.css'],
})
export class SpeakerlistComponent implements OnInit {
  newSpeaker: Speaker = new Speaker(0, '', '', '', 1);

  allSpeakers: Speaker[] = [
    new Speaker(1, 'yasser', 'alex-egy', './assets/images/1.jpg', 5),
    new Speaker(2, 'mohamed', 'cairo-egy', './assets/images/2.jpg', 3),
    new Speaker(3, 'youssef', 'fayoom-egy', './assets/images/3.jpg', 2),
  ];

  saveNewSpeaker(n: Speaker) {
    this.allSpeakers.push(n);
  }

  showImg: boolean = false;
  hideImg: boolean = true;

  showImage() {
    this.showImg = true;
    this.hideImg = false;
  }
  hideImage() {
    this.showImg = false;
    this.hideImg = true;
  }

  isdetails: boolean = false;
  showDetails(item: Speaker) {
    this.isdetails = !this.isdetails;
    this.newSpeaker = item;
  }

  showEditForm: boolean = false;
  edit(item: Speaker) {
    this.newSpeaker = item;
    this.showEditForm = !this.showEditForm;
    // console.log(this.newSpeaker);
  }

  remove(id: number) {
    for (let i = 0; i < this.allSpeakers.length; i++) {
      if (this.allSpeakers[i].id == id) {
        this.allSpeakers.splice(i, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
