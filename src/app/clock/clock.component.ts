import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  template: `<p>The current time is: {{ time }}</p>`,
  styles: [],
})
export class ClockComponent implements OnInit {
  time: string = '';

  ngOnInit() {
    const clockObservable = new Observable<string>((subscriber) => {
      const intervalId = setInterval(() => {
        subscriber.next(new Date().toLocaleTimeString());
      }, 1000);

      // Cleanup logic to clear the interval when unsubscribed
      return () => clearInterval(intervalId);
    });

    clockObservable.subscribe((currentTime) => (this.time = currentTime));
  }
}

