import { News} from '../../classes/news/news';

export interface INewsState {
  news: News[];
  expandedNews: News;
}

export const initialNewsState: INewsState = {
  news: null,
  expandedNews: null
};
