import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../core/classes/news/news';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() description = true;
  @Input() newsInfo: News = null;
  @Input() link: number = null;

  constructor() { }

  ngOnInit() {
  }

}
