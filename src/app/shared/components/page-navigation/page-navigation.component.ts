import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../core/store/states/app.state';
import {selectPage} from '../../../core/store/selectors/news.selectors';
import {select} from '@ngrx/store';
import {SetPage} from '../../../core/store/actions/news.actions';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent implements OnInit {

  $page = this._store.pipe(select(selectPage))

  @Input() pagesCount = 12;
  @Output() selected = new EventEmitter();

  currentPage = 1;
  startPage = 1;
  pagesInRow = 5;
  pages = [];

  constructor(private _store: Store<IAppState>) {
    this.buildPages(0);
  }

  ngOnInit() {
    this.$page.pipe(take(1)).subscribe( (page) => {
      this.selectPage(page)
    })
  }

  buildPages(direction: number) {
    this.currentPage += direction;
    this.checkStartPage(direction);
    this.pages = new Array(this.pagesInRow > this.pagesCount ? this.pagesCount : this.pagesInRow)
      .fill(0)
      .map( (page, index) => {
      return index + this.startPage;
    });
  }

  desc() {
    this.buildPages(-1);
    this._store.dispatch(new SetPage(this.currentPage - 1))
  }

  inc() {
    this.buildPages(1);
    this._store.dispatch(new SetPage(this.currentPage + 1))
  }

  checkStartPage(direction: number) {
    if (direction > 0) {
      if ((this.pages[this.pages.length - 1] - this.currentPage === 1)
        && (this.currentPage < (this.pagesCount - 2))) {
        this.startPage++;
      }
    } else {
      if ((this.currentPage - this.pages[0] === 1)
        && (this.currentPage > 2)) {
        this.startPage--;
      }
    }
  }

  isPageVisible(type: string) {
    if (type === 'first') {
      return (this.currentPage > 3)&&(this.pagesCount > this.pagesInRow + 1);
    }
    if (type === 'last') {
      return (this.pagesCount > this.pagesInRow);
    }
  }

  isSeparatorVisible(type: string) {
    if (type === 'first') {
      return (this.currentPage > 4)&&(this.pagesCount > this.pagesInRow + 1);
    }
    if (type === 'last') {
      return this.currentPage < (this.pagesCount - 3) && (this.pagesCount > this.pagesInRow + 1);
    }
  }

  selectPage(page: number) {
    if (page > this.currentPage) {
      const diff = page - this.currentPage;
      this._store.dispatch(new SetPage(this.currentPage + diff))
      for (let i = 0; i < diff; i++) {
        this.buildPages(1)
      }
    } else {
      const diff = this.currentPage - page;
      this._store.dispatch(new SetPage(this.currentPage - diff))
      for (let i = 0; i < diff; i++) {
        this.buildPages(-1)
      }
    }
  }
}
