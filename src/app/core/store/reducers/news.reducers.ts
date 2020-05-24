import {INewsState, initialNewsState} from '../states/news.state';
import {ENewsActions, NewsActions} from '../actions/news.actions';

export const newsReducers = (
  state = initialNewsState,
  action: NewsActions
): INewsState => {
  switch (action.type) {
    case ENewsActions.GetNewsSuccess:
      return {
        ...state,
        news: action.allNews
      };
    case ENewsActions.GetSingleNewsSuccess:
      return {
        ...state,
        expandedNews: action.foundedNews
      }
    case ENewsActions.SetPage:
      return {
        ...state,
        page: action.page
      }
    case ENewsActions.SetPageSuccess:
      return {
        ...state
      }
    default:
      return state;
  }
}

