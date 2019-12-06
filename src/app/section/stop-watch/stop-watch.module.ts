import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TimeAndButtonsComponent } from './time-and-buttons/time-and-buttons.component';
import { StopWatchComponent } from './stop-watch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    TimeAndButtonsComponent,
    StopWatchComponent
  ],
  exports: [
    StopWatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  // providers: [PageToggleService],
})
export class StopWatchModule { }
