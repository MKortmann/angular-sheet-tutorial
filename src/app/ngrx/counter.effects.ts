import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, delay, take, switchMap } from 'rxjs/operators';
import { increment } from './counter.action';

// import { HttpClient } from '@angular/common/http'
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

// Effects used to async operations. Used to handle asynchronous operations, such as responding to dispatched actions or making HTTP requests.

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private todoService: JsonplaceholderService
  ) {}

  increment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      delay(1000),
      take(2),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((response: any) => {
            console.log(response);
            return increment();
          })
        )
      )
    )
  );
}
