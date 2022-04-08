import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit, OnChanges {
  @Input() rating: number = 5;
  cropWidth: number = 75;

  constructor() {}

  ngOnChanges(): void {
    // console.log('onchange');
    this.cropWidth = (this.rating * 75) / 5;
  }

  ngOnInit(): void {}
}
