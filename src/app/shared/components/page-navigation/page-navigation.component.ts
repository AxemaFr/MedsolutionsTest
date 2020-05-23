import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent implements OnInit {

  @Input() pagesCount = 7;
  @Output() selected = new EventEmitter();

  currentPage = 1;
  startPage = 1;
  pagesInRow = 5;
  pages = [];

  constructor() {
    this.buildPages(0);
  }

  ngOnInit() {

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
  }

  inc() {
    this.buildPages(1);
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
      for (let i = 0; i < diff; i++) {
        this.buildPages(1)
      }
    } else {
      const diff = this.currentPage - page;
      for (let i = 0; i < diff; i++) {
        this.buildPages(-1)
      }
    }
  }
}
