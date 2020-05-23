import {createSelector} from '@ngrx/store';
import {INewsState} from '../states/news.state';
import {IAppState} from '../states/app.state';

const selectNews = (state: IAppState) => state.news;

export const selectNewsList = createSelector(
  selectNews,
  (state: INewsState) => state.news
)

export const selectSingleNews = createSelector(
  selectNews,
  (state: INewsState) => state.expandedNews
)
