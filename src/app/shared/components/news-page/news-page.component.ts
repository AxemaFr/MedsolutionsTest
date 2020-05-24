import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../core/store/states/app.state';
import {selectSingleNews} from '../../../core/store/selectors/news.selectors';
import {GetSingleNews} from '../../../core/store/actions/news.actions';
import {filter, takeWhile} from 'rxjs/operators';
import {isNull} from 'util';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news$ = this._store.pipe(select(selectSingleNews)).pipe(
    filter(item => {
      return !isNull(item);
    })
  )

  constructor(private route: ActivatedRoute,
              private _store: Store<IAppState>) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      if (params.id) {
        this._store.dispatch(new GetSingleNews(+params.id))
      }
    })
  }

}
