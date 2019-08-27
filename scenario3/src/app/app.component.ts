import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public msg = '';
  title = 'scenario3';
  onKey(value: string) {
    this.msg = value;
  }
}
