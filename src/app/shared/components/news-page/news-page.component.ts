import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../core/http/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
