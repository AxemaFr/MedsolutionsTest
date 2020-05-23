import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { PageNavigationComponent } from './components/page-navigation/page-navigation.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [NewsListComponent, NewsItemComponent, PageNavigationComponent, NewsPageComponent],
  exports: [NewsListComponent, NewsPageComponent],
  providers: [HttpClientModule],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
