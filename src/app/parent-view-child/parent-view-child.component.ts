import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent-view-child',
  templateUrl: './parent-view-child.component.html',
  styleUrls: ['./parent-view-child.component.scss'],
})
export class ParentViewChildComponent implements AfterViewInit {
  @ViewChild('childMessage', { static: false }) childMessage:
    | ElementRef
    | undefined;

  ngAfterViewInit(): void {
    this.childMessage?.nativeElement.focus();
  }
}
