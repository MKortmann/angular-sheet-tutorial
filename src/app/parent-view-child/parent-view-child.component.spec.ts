import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentViewChildComponent } from './parent-view-child.component';

describe('ParentViewChildComponent', () => {
  let component: ParentViewChildComponent;
  let fixture: ComponentFixture<ParentViewChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentViewChildComponent],
    });
    fixture = TestBed.createComponent(ParentViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
