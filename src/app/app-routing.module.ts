import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from './shared/components/news-list/news-list.component';
import {NewsPageComponent} from './shared/components/news-page/news-page.component';


const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'news/:id', component: NewsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
