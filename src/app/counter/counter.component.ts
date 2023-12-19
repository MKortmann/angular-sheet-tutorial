import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../ngrx/counter.action';
import { selectCounterValue } from '../ngrx/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counterValue = 0;

  constructor(private store: Store) {
    this.store.select(selectCounterValue).subscribe((value: any) => {
      this.counterValue = value;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
