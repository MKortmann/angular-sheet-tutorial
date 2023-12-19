import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  counterValue = 0;

  constructor(private store: Store) {
    //@ts-ignore
    this.store.select('counter').subscribe((value: any) => {
      this.counterValue = value;
    });
  }
}
