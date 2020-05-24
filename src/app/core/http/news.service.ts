import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(page: number) {
    return this.http.get(`https://medicapp.k8s.mhth.ru/api/v1/news?page=${page}&per=4`)
  }

  getSingleNews(id: number) {
    return this.http.get(`https://medicapp.k8s.mhth.ru/api/v1/news/${id}`);
  }
}
