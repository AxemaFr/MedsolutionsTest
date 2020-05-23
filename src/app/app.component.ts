import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IAppState} from './core/store/states/app.state';
import {Store} from '@ngrx/store';
import {GetNews} from './core/store/actions/news.actions';
import {selectNewsList} from './core/store/selectors/news.selectors';
import {select} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'MedsolutionsTest';
  news$ = this._store.pipe(select(selectNewsList))
  constructor(private _store: Store<IAppState>) {

  }

  ngOnInit(): void {
    this._store.dispatch(new GetNews());
  }

  ngAfterViewInit(): void {
    this.news$.subscribe( (news) => {
      console.log(news);
    })
  }
}
