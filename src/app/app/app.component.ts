import { Component } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent],
  template: `
    <h1>Angular Observable Clock</h1>
    <app-clock></app-clock>
  `,
  styles: [],
})
export class AppComponent {}

