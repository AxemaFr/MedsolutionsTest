import { News} from '../../classes/news/news';

export interface INewsState {
  news: News[];
  page: number;
}

export const initialNewsState: INewsState = {
  news: null,
  page: null
};
