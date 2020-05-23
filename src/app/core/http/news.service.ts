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
            "image_url": "https://lh3.googleusercontent.com/proxy/DijlSzLaX5NvKhLAefmA5tOFUOgHOO002W7l_IhRBiFJ_unIis_5nupCsBDTBF-K7PX7-HUWGWLmOp6BNlFlWB01GvSuWYqYkI42TVvG-iXGeWctM8W-zk39mg",
            "thumbnail_url": "https://www.example.com/thumb.jpg",
            "big_thumbnail_url": "string",
            "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing..."
          },
          {
            "id": 2,
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
            "image_url": "https://lh3.googleusercontent.com/proxy/DijlSzLaX5NvKhLAefmA5tOFUOgHOO002W7l_IhRBiFJ_unIis_5nupCsBDTBF-K7PX7-HUWGWLmOp6BNlFlWB01GvSuWYqYkI42TVvG-iXGeWctM8W-zk39mg",
            "thumbnail_url": "https://www.example.com/thumb.jpg",
            "big_thumbnail_url": "string",
            "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing..."
          },
          {
            "id": 3,
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
            "image_url": "https://lh3.googleusercontent.com/proxy/DijlSzLaX5NvKhLAefmA5tOFUOgHOO002W7l_IhRBiFJ_unIis_5nupCsBDTBF-K7PX7-HUWGWLmOp6BNlFlWB01GvSuWYqYkI42TVvG-iXGeWctM8W-zk39mg",
            "thumbnail_url": "https://www.example.com/thumb.jpg",
            "big_thumbnail_url": "string",
            "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing..."
          },{
            "id": 4,
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
            "image_url": "https://lh3.googleusercontent.com/proxy/DijlSzLaX5NvKhLAefmA5tOFUOgHOO002W7l_IhRBiFJ_unIis_5nupCsBDTBF-K7PX7-HUWGWLmOp6BNlFlWB01GvSuWYqYkI42TVvG-iXGeWctM8W-zk39mg",
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
        "image_url": "https://lh3.googleusercontent.com/proxy/DijlSzLaX5NvKhLAefmA5tOFUOgHOO002W7l_IhRBiFJ_unIis_5nupCsBDTBF-K7PX7-HUWGWLmOp6BNlFlWB01GvSuWYqYkI42TVvG-iXGeWctM8W-zk39mg",
        "thumbnail_url": "https://www.example.com/thumb.jpg",
        "big_thumbnail_url": "string",
        "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing...",
        "sections": [],
        "source": "https://medicapp.k8s.mhth.ru",
        "text": "<p>The Earth<br />\r\n<em>The Starting Point</em></p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "news_event": {}
      }
    );
  }
}
