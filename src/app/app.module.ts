import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {appReducers} from './core/store/reducers/app.reducers';
import {StoreModule} from '@ngrx/store';
import {NewsEffects} from './core/store/effects/news.effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {NewsService} from './core/http/news.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([NewsEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
