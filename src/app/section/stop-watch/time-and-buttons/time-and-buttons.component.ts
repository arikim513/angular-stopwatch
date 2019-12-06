import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-time-and-buttons',
  templateUrl: './time-and-buttons.component.html',
  styleUrls: ['./time-and-buttons.component.scss']
})
export class TimeAndButtonsComponent implements OnInit {

  // @Input() inputData : string;
  min: number = 0;
  sec: number = 0;
  ms: number = 0;
  timeInterval;

  constructor() { 
    // console.log(this.inputData);
  }

  ngOnInit() {
  }

  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      if(this.ms >=100){
        this.ms = 0;
        this.sec++;
      }
      if(this.sec >=60){
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10);
  }
  
  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  // @Output() clickEvent = new EventEmitter<string>();

  // excuteButton(command) {
  //   this.clickEvent.emit(command);
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   for (let propName in changes) {
  //     if (propName == 'inputData'){
  //       switch (changes[propName].currentValue) {
  //         case 'start':
  //           this.timeStart();
  //           break;
  //         case 'stop':
  //           this.timeStop();
  //           break;
  //         case 'reset':
  //           this.timeReset();  
  //           break;
  //         default:
  //           break;
  //       }
  //     }      
  //   }
  // }
}

