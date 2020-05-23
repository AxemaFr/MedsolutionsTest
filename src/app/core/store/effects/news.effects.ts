import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ENewsActions, GetNews, GetNewsSuccess, GetSingleNews, GetSingleNewsSuccess} from '../actions/news.actions';
import {flatMap, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {INewsState} from '../states/news.state';
import {NewsService} from '../../http/news.service';
import {News} from '../../classes/news/news';
import {of} from 'rxjs';

@Injectable()
export class NewsEffects {
  @Effect()
  getNews$ = this._actions$.pipe(
    ofType<GetNews>(ENewsActions.GetNews),
    switchMap(() => this._newsService.getNews()),
    flatMap( (newsHttp: any) => {
      return of(new GetNewsSuccess(newsHttp.data.news))
    })
  );

  @Effect()
  getSingleNews$ = this._actions$.pipe(
    ofType<GetSingleNews>(ENewsActions.GetSingleNews),
    switchMap(() => this._newsService.getSingleNews('1')),
    switchMap( (newsHttp: News) => {
      return of(new GetSingleNewsSuccess(newsHttp))
    })
  );

  constructor(
    private _newsService: NewsService,
    private _actions$: Actions,
    private _store: Store<INewsState>
  ) {
  }
}
