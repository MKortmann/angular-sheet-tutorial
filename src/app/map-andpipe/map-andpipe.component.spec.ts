import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAndpipeComponent } from './map-andpipe.component';

describe('MapAndpipeComponent', () => {
  let component: MapAndpipeComponent;
  let fixture: ComponentFixture<MapAndpipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapAndpipeComponent],
    });
    fixture = TestBed.createComponent(MapAndpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
