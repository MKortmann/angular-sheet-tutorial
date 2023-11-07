import { createFeatureSelector, createSelector } from '@ngrx/store';

export const counter = createFeatureSelector<number>('counter');

export const selectCounterValue = createSelector(counter, (state) => state);
