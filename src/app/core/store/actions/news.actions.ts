import { Action } from '@ngrx/store';
import { News } from '../../classes/news/news';

export enum ENewsActions {
  GetNews = '[News] Get news',
  GetNewsSuccess = '[News] Get news Success',
  GetSingleNews = '[News] Get single news',
  GetSingleNewsSuccess = '[News] Get single news Success'
}

export class GetNews implements Action {
  public readonly type = ENewsActions.GetNews;
}

export class GetNewsSuccess implements Action {
  public readonly type = ENewsActions.GetNewsSuccess;
  constructor( public allNews: News[]) { }
}

export class GetSingleNews implements Action {
  public readonly type = ENewsActions.GetSingleNews;
  constructor( public newsId: number) {}
}

export class GetSingleNewsSuccess implements Action {
  public readonly  type = ENewsActions.GetSingleNewsSuccess;
  constructor( public foundedNews: News) {}
}
export type NewsActions = GetNews | GetNewsSuccess | GetSingleNews | GetSingleNewsSuccess;
