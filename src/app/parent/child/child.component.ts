import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  // Data from parent to child via @Input decorator
  @Input() childMessage = 'kdjföslkdfjdskl';
  // Child to parent via @Output decorator and EventEmitter
  @Output() messageEventChild = new EventEmitter<string>();
  sendMessage() {
    this.messageEventChild.emit('Hello from child component');
  }
}
