import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(public element: ElementRef) {}
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#777';
  }
}
