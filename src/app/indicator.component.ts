import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
  host: {
    fxLayout: 'column',
    fxLayoutAlign: 'start center',
    fxLayoutGap: '24px',
  },
})
export class IndicatorComponent {
  @Input() count: number;
  @Output() recieve = new EventEmitter<boolean>();
  isRecieving = false;

  constructor() {
    this.recieve.subscribe((value) => {
      this.isRecieving = value;
    });
  }
}
