import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scenario6';
  public msg = '';
  onKey(value: string) {
    this.msg = value;
  }
}
