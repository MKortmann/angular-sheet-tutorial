import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterServiceService {
  //BehaviorSubject is a type of Subject in RxJS. A Subject is a special type of Observable that allows values to be multicasted to multiple Observers. What sets BehaviorSubject apart is its ability to hold and broadcast the current value to all its subscribers.
  private counter = new BehaviorSubject<number>(0);

  //Actions plus reducer
  getCounter(): Observable<number> {
    return this.counter.asObservable();
  }

  increment() {
    this.counter.next(this.counter.getValue() + 1);
  }

  decrement() {
    this.counter.next(this.counter.getValue() - 1);
  }

  reset() {
    this.counter.next(0);
  }
}
