import { Component } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  title = "'This is the title of body component'";
  array = ['first element', 'second element', 'third element'];
  flag = true;
  userInput: string = 'first input';
  number = 0;
  currentDate = new Date();

  parentMessage = 'Hello from parent component';
  receivedMessage: string = '';
  items: any;
  JsonplaceholderService: any;

  constructor(private todoService: JsonplaceholderService) {
    // Initialize variables and dependencies (inject services). It should not be used for complex initialization that relies on Angular-specific features....
    console.log(`title: ${this.title}`);
  }

  // more info: https://angular.io/guide/lifecycle-hooks
  ngOnInit(): void {
    // called after the contructor. Perform initialization that relies on Angular, e.g., interacting with the view

    // this.number++
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(data => {this.items = data; console.log(data)})

    //better way to do regards to the fetching data -> using observable
    this.todoService.getTodos().subscribe({
      next: (res: any) => {
        this.items = res;
      },
      error: (error: any) => {
        console.error('Error fetching todos:', error);
      },
    });
  }

  ngOnDestroy(): void {}

  handleClick() {
    this.number++;
  }

  receiveMessageParent(message: string) {
    this.receivedMessage = message;
    // alert("hello world")
  }

  solveExpression() {
    return 10 - 2;
  }
}
