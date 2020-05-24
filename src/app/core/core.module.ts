import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpClient} from '@angular/common/http';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent],
  providers: [HttpClient],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule { }
