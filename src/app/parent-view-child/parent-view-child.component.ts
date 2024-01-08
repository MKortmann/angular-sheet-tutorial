import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent-view-child',
  templateUrl: './parent-view-child.component.html',
  styleUrls: ['./parent-view-child.component.scss'],
})

/**
 * This is the parent component. The child is the input component.
 * So, here we display the input component and through ViewChild decorator
 * we access it and focus on it
 */
export class ParentViewChildComponent implements AfterViewInit {
  /**
   * View Child
   * Angular
   */

  // ViewChild is a decorator that allows you to query and get a reference to a child component element in the template.
  // In this case, it is querying the template for an element with the local variable #childMessage
  // {static: false}:  used to determine when the query should be resolved: during the component contructor { static: true } or after the component's view has been initialized {static: false}
  @ViewChild('childMessage', { static: false }) childMessage:
    | ElementRef
    | undefined;

  // AfterViewInit method is part of the Angular lifecycle hook. Called after the view is fully initialized.
  ngAfterViewInit(): void {
    this.childMessage?.nativeElement.focus();
  }
}
