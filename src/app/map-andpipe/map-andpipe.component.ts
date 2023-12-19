import { Component } from '@angular/core';

import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-map-andpipe',
  templateUrl: './map-andpipe.component.html',
  styleUrls: ['./map-andpipe.component.scss'],
})
export class MapAndpipeComponent {
  source = of(1, 2, 3, 4, 5);

  array = [1,2,3];

  // map transforms each value emitted by the source observable to a new value
  // pipe is used to combine multiple operators and return a new observable
  double = this.source.pipe(map((val) => val * 2));

  doubleWithFilter = this.source.pipe(
    map(val => val * 2),
    filter(val => val > 5),
    filter(val => val > 8)
  )

  doubleArray = this.array.map(val => val * 2);

  constructor() {
    this.double.subscribe((val) => console.log(val));

    console.log("test")
    this.double.forEach((val) => console.log(val));
    console.log("test")

    this.doubleWithFilter.subscribe((val) => console.warn(val));

    console.log(this.doubleArray);
  }
}
