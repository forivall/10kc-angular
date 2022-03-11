import { interval, Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`:host, :host > main { height: 100%; }`]
})
export class AppComponent implements OnDestroy {
  notificationCount = 0;
  intervalSubscription: Subscription | undefined;
  setRecieve(value: boolean) {
    if (value) {
      this.intervalSubscription = interval(300).subscribe(() => {
        this.notificationCount++;
      });
    } else {
      this.intervalSubscription.unsubscribe()
    }
  }
  onReset() {
    this.notificationCount = 0;
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
