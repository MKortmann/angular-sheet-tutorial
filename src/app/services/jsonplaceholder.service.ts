/**
 * Angular way of handling HTTP communication
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// An observable represents a stream of data over time, which is well-suited for handling asynchronous operations.
import { Observable } from 'rxjs';

// The @Injectable() decorator marks it as a service direct in the root that can be injected. Under the hood, the new service is being registered with the "root" injector of the application.
@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<[]> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<[]>(url);
  }
}
