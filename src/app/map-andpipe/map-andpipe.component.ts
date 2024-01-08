import { Component } from '@angular/core';
/**
 * RxJS - Reactive Extensions for JavaScript
 * JS library that provides support for reactive programming using Observables
 * Reactive Programming: is a paradigm that deals with asynchronous data streams, allowing you to compose and transform them in a declarative manner
 * Operators: RxJS provides a wide range of operators that allow you to transform, filter, combine and manipulate Observables
 *
 */
import { of } from 'rxjs';

import { map, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-map-andpipe',
  templateUrl: './map-andpipe.component.html',
  styleUrls: ['./map-andpipe.component.scss'],
})
export class MapAndpipeComponent {
  // of - part of RxJS is used to create an observable that emits a sequence of values.
  source$ = of(1, 2, 3, 4, 5);

  array = [1, 2, 3];

  // map transforms each value emitted by the source observable to a new value by applying a function to it.
  // pipe is used to combine multiple operators and return a new observable
  double = this.source$.pipe(map((val) => val * 2));

  // filter: emits only those items from the source Observable that pass a specified condition
  doubleWithFilter = this.source$.pipe(
    map((val) => val * 2),
    filter((val) => val > 5),
    filter((val) => val > 8),
  );

  doubleArray = this.array.map((val) => val * 2);

  constructor() {
    this.double.subscribe((val) => console.log(val));

    console.log('test');
    this.double.forEach((val) => console.log(val));
    console.log('test');

    this.doubleWithFilter.subscribe((val) => console.warn(val));

    console.log(this.doubleArray);
  }
}
