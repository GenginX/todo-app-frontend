import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {HeaderComponent} from './component/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {TodoListComponent} from './component/todo-list/todo-list.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoAddComponent } from './component/todo-add/todo-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TodoDetailsComponent } from './component/todo-details/todo-details.component';
import { TodoEditComponent } from './component/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TodoListComponent,
    PageNotFoundComponent,
    TodoAddComponent,
    TodoDetailsComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
