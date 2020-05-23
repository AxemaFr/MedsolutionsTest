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
        news: action.payload
      };
    case ENewsActions.GetSingleNewsSuccess:
      return {
        page: action.payload,
        ...state
      };
    default:
      return state;
  }
}

