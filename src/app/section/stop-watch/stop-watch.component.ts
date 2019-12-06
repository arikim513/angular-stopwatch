import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss'],
  // providers: [PageToggleService]
})
export class StopWatchComponent implements OnInit {

  present: string = "welcome";

  constructor(
    private pageToggleService: PageToggleService
  ) { }

  goClock(){
    this.pageToggleService.goPage('/clock');
  }

  startTime($event) {
    this.present = $event;
  }

  ngOnInit() {
  }

}
