import {RouterReducerState} from '@ngrx/router-store';
import {INewsState, initialNewsState} from './news.state';

export interface IAppState {
  router?: RouterReducerState;
  news: INewsState;
}

export const initialAppState: IAppState = {
  news: initialNewsState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
