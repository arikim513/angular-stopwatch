import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { RouterModule, Routes } from '@angular/router';
import { StopWatchModule } from './stop-watch/stop-watch.module';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopWatchComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
  ],
  exports: [
    RouterModule,
    SectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StopWatchModule,
  ],
})
export class SectionModule { }
