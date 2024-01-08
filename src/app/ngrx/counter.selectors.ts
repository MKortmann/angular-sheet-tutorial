import { createFeatureSelector, createSelector } from '@ngrx/store';

// so, counter is a feature selector of type number with name counter.
// Feature Selectors focus on selecting specific features or state slices, while selectors focus on deriving or transforming data based on that state
export const counter = createFeatureSelector<number>('counter');

// createSelector is a function that creates a memoized selector. It takes one or more input selectors and a projection function and returns a new selector.
// counter is the feature selector created earlier using createFeatureSelector
// (state) => state is the projection function. It takes the state returned by the counter and returns the same state.In this case, it's simple identity function
export const selectCounterValue = createSelector(counter, (state) => state);

/**
 * Summary
 * The counter feature selector is used to create a feature-specific slice of the application state
 * The selectCounterValue selector is a memoized selector that extracts the entire feature state from the overall state.
//  * Selectors created with createSelector are memoized, meaning that they cache their results. This can improve performance by avoiding unnecessary recomputation if the input state hasn't changed.
 */
