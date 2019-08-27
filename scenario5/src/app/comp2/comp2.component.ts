import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Output() public child = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public msg = '';
  onChange() {
    this.child.emit(this.msg);
  }
}
