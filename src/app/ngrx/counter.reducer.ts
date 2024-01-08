import { createReducer, on } from '@ngrx/store';

import { increment, decrement, reset } from './counter.action';

// The initialState is not the entire store; rather, it represents the initial state for the specific slice of the store managed by this reducer.
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  // on method used to react to specific actions
  // state is the current state of the slice managed by the reducer
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
);
