import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'indicator',
  templateUrl: './indicator.component.html',
})
export class IndicatorComponent {
  @Input() count = 0;
  /** To receive, this emits `true`. To stop, emits `false` */
  @Output() recieve = new EventEmitter<boolean>();
  @Output() reset = new EventEmitter<void>();

  isRecieving = false;
  constructor() {
    this.recieve.subscribe((value) => {
      this.isRecieving = value;
    });
  }
}
