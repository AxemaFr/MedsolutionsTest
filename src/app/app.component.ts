import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IAppState} from './core/store/states/app.state';
import {Store} from '@ngrx/store';
import {GetNews} from './core/store/actions/news.actions';
import {selectNewsList} from './core/store/selectors/news.selectors';
import {select} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MedsolutionsTest';
  constructor() {

  }

  ngOnInit(): void {
  }
}
