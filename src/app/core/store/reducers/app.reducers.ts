import { ActionReducerMap } from '@ngrx/store';
import {IAppState} from '../states/app.state';
import {routerReducer} from '@ngrx/router-store';
import {newsReducers} from './news.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  news: newsReducers
};

