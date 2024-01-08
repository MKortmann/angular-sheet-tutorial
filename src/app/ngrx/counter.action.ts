import { createAction } from '@ngrx/store';

/**
 * Using createAction from ngrx to create an action
 */

// Each action is given a unique string identifier that describes the action. The identifiers are enclosed in square brackets and represent a category or source of the action. For example, '[Counter Component]' indicates that these actions are related to the counter component, and the Increment is the name of the specific action.
// P.S.: In NgRx, the `[Counter Component]` string in your action is just a label or namespace that helps you identify which part of your application triggered the action. It'S a convention and not something that NgRx enforces or uses to determine the source of the action dynamically.

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
