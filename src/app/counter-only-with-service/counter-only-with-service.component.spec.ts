import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOnlyWithServiceComponent } from './counter-only-with-service.component';

describe('CounterOnlyWithServiceComponent', () => {
  let component: CounterOnlyWithServiceComponent;
  let fixture: ComponentFixture<CounterOnlyWithServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterOnlyWithServiceComponent],
    });
    fixture = TestBed.createComponent(CounterOnlyWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
