import { Component, Input } from '@angular/core';

@Component({
  selector: 'indicator',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class IndicatorComponent  {
  @Input() name: string;
}
