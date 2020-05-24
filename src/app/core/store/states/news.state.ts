import { News} from '../../classes/news/news';

export interface INewsState {
  news: News[];
  expandedNews: any;
  page: number;
}

export const initialNewsState: INewsState = {
  news: null,
  expandedNews: null,
  page: 1
};
