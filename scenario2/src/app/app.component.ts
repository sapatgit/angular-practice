import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scenario2';
  public msg = '';
  send(value: string) {
    this.msg = value;
  }
}
