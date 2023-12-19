import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterServiceService {
  //Store in NgRx
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
