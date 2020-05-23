import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {flatMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    //Тут должен быть запрос на бэк ко всем новосятм
    return of({
      "data": {
        "news": [
          {
            "id": 1,
            "slug": "2018-02-26-novye-stili",
            "link": "https://medsolutions.mhth.ru/novosti/2018-02-26-novye-stili",
            "title": "Новые стили!",
            "statistics": {
              "show": false,
              "time": false,
              "share": false,
              "source": false,
              "perusal": false
            },
            "created_at": "2018-05-10T12:47:28.711+03:00",
            "news_category": {
              "id": 1,
              "title": "Актуальные новости",
              "slug": "aktualnye-novosti"
            },
            "image_url": "https://www.example.com/image.jpg",
            "thumbnail_url": "https://www.example.com/thumb.jpg",
            "big_thumbnail_url": "string",
            "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing..."
          },
          {
            "id": 1,
            "slug": "2018-02-26-novye-stili",
            "link": "https://medsolutions.mhth.ru/novosti/2018-02-26-novye-stili",
            "title": "Новые стили!",
            "statistics": {
              "show": false,
              "time": false,
              "share": false,
              "source": false,
              "perusal": false
            },
            "created_at": "2018-05-10T12:47:28.711+03:00",
            "news_category": {
              "id": 1,
              "title": "Актуальные новости",
              "slug": "aktualnye-novosti"
            },
            "image_url": "https://www.example.com/image.jpg",
            "thumbnail_url": "https://www.example.com/thumb.jpg",
            "big_thumbnail_url": "string",
            "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing..."
          },
          {
            "id": 1,
            "slug": "2018-02-26-novye-stili",
            "link": "https://medsolutions.mhth.ru/novosti/2018-02-26-novye-stili",
            "title": "Новые стили!",
            "statistics": {
              "show": false,
              "time": false,
              "share": false,
              "source": false,
              "perusal": false
            },
            "created_at": "2018-05-10T12:47:28.711+03:00",
            "news_category": {
              "id": 1,
              "title": "Актуальные новости",
              "slug": "aktualnye-novosti"
            },
            "image_url": "https://www.example.com/image.jpg",
            "thumbnail_url": "https://www.example.com/thumb.jpg",
            "big_thumbnail_url": "string",
            "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing..."
          },{
            "id": 1,
            "slug": "2018-02-26-novye-stili",
            "link": "https://medsolutions.mhth.ru/novosti/2018-02-26-novye-stili",
            "title": "Новые стили!",
            "statistics": {
              "show": false,
              "time": false,
              "share": false,
              "source": false,
              "perusal": false
            },
            "created_at": "2018-05-10T12:47:28.711+03:00",
            "news_category": {
              "id": 1,
              "title": "Актуальные новости",
              "slug": "aktualnye-novosti"
            },
            "image_url": "https://www.example.com/image.jpg",
            "thumbnail_url": "https://www.example.com/thumb.jpg",
            "big_thumbnail_url": "string",
            "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing..."
          }
        ]},
      "success": true});
  }

  getSingleNews(id: number) {
    //Тут должен быть запрос на бэк к опредённой новости
    return of(
      {
        "id": 1,
        "slug": "2018-02-26-novye-stili",
        "link": "https://medsolutions.mhth.ru/novosti/2018-02-26-novye-stili",
        "title": "Новые стили!",
        "statistics": {},
        "created_at": "2018-05-10T12:47:28.711+03:00",
        "news_category": {},
        "image_url": "https://www.example.com/image.jpg",
        "thumbnail_url": "https://www.example.com/thumb.jpg",
        "big_thumbnail_url": "string",
        "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing...",
        "sections": [],
        "source": "https://medicapp.k8s.mhth.ru",
        "text": "<p>The Earth<br />\r\n<em>The Starting Point</em></p>",
        "news_event": {}
      }
    );
  }
}
