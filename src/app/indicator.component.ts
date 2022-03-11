import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'indicator',
  templateUrl: './indicator.component.html',
})
export class IndicatorComponent {
  @Input() count: number | undefined;
  /** To receive, this emits `true`, to stop, emits `false` */
  @Output() recieve = new EventEmitter<boolean>();
  /** Reset button clicked */
  @Output() reset = new EventEmitter<void>();
  
  isRecieving = false;
  constructor() {
    this.recieve.subscribe((value) => {
      this.isRecieving = value;
    });
  }
}
