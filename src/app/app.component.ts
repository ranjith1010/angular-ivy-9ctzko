import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'My App Demo ';
  car = 'lambo';
  public setCar(event) {
    this.car = event.target.value;
  }
}
