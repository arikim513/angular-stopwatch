import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopWatchModule } from '../section/stop-watch/stop-watch.module';
import { StopWatchComponent } from '../section/stop-watch/stop-watch.component';
import { ClockComponent } from '../section/clock/clock.component';

@Injectable(
  {
    providedIn: 'root'
    // providedIn: StopWatchModule
    // providedIn: StopWatchComponent
  }
)
export class PageToggleService {

  routingCount = 0;

  constructor(private router: Router) { }

  goPage(target){
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
