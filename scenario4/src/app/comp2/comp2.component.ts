import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent = new EventEmitter();

  onKey(value: string) {
    this.childEvent.emit(value);
  }
}
