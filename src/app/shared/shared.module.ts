import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';



@NgModule({
  declarations: [NewsListComponent, NewsItemComponent],
  exports: [NewsListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
