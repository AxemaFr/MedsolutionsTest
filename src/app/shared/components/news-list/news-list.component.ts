import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GetNews} from '../../../core/store/actions/news.actions';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../core/store/states/app.state';
import {selectNewsList} from '../../../core/store/selectors/news.selectors';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news$ = this._store.pipe(select(selectNewsList))
  constructor(private _store: Store<IAppState>) {

  }

  ngOnInit() {
    this._store.dispatch(new GetNews());
  }
}
