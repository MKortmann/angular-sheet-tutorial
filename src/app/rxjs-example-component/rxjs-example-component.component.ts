import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mergeMap, scan, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example-component.component.html',
  styleUrls: ['./rxjs-example-component.component.scss'],
})
export class RxjsExampleComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Simulate an API request using the of operator
    const apiResponse$ = of('https://jsonplaceholder.typicode.com/users');

    apiResponse$
      .pipe(
        // Use mergeMap to transform the URL into an actual HTTP request
        // The mergeMap operator is used to "flatten" this observable. In the context of observables, "flattening" means converting a higher-order observable (an observable of observables) into a first-order observable (a simple observable that emits regular values). In this case, mergeMap is used to unwrap the observable returned by this.http.get<any[]>(url).
        mergeMap((url: any) => this.http.get<any[]>(url)),
      )
      .subscribe({
        next: (transformedUsers: any[]) => {
          // Use subscribe to handle the final result and update the component's state
          this.users = transformedUsers;
        },
        error: (error: any) => {
          // Handle errors here
          console.error('Error fetching data:', error);
        },
        complete: () => {
          // Handle completion here if needed
          console.log('Data fetching completed.');
        },
      } as any);
  }
}
