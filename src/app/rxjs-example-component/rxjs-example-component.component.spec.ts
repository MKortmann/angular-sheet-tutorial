import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExampleComponentComponent } from './rxjs-example-component.component';

describe('RxjsExampleComponentComponent', () => {
  let component: RxjsExampleComponentComponent;
  let fixture: ComponentFixture<RxjsExampleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsExampleComponentComponent],
    });
    fixture = TestBed.createComponent(RxjsExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
