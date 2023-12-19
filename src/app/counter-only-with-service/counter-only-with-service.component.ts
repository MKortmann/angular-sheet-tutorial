import { Component } from '@angular/core';
import { CounterServiceService } from '../services/counter-service.service';

@Component({
  selector: 'app-counter-only-with-service',
  templateUrl: './counter-only-with-service.component.html',
  styleUrls: ['./counter-only-with-service.component.scss'],
})
export class CounterOnlyWithServiceComponent {
  counterValue = 0;

  constructor(private counterService: CounterServiceService) {}

  ngOnInit(): void {
    this.counterService.getCounter().subscribe((value: any) => {
      this.counterValue = value;
    });
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
}
