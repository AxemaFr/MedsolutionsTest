import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../core/store/states/app.state';
import {selectNewsList, selectSingleNews} from '../../../core/store/selectors/news.selectors';
import {News} from '../../../core/classes/news/news';
import {GetNews, GetSingleNews} from '../../../core/store/actions/news.actions';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  news: any = this._store.pipe(select(selectSingleNews))
  constructor(private route: ActivatedRoute,
              private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetSingleNews(1))
    this.route.params.subscribe( (params) => {
      this._store.dispatch(new GetSingleNews(params.id))
    })

  }

}
