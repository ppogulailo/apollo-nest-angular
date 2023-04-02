import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from "./components/nav.components";
import {IconComponent} from "./components/icon/icon.component";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {IconModule} from "./components/icon/icon.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    IconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
