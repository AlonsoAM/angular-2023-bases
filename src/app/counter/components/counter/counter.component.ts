import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
})
export class CounterComponent {
  public counter: number = 10;

  aumentar = () => {
    console.log(this.counter);
    this.counter++;
  };
  disminuir = () => this.counter--;
  reset = () => (this.counter = 0);
}
