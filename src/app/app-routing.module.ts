import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {TodoListComponent} from './component/todo-list/todo-list.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {TodoAddComponent} from './component/todo-add/todo-add.component';
import {TodoDetailsComponent} from './component/todo-details/todo-details.component';
import {TodoEditComponent} from './component/todo-edit/todo-edit.component'; // CLI imports router

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'todos', component: TodoListComponent
  },
  {
    path: 'todo-add', component: TodoAddComponent
  },
  {
    path: 'todos/:id', component: TodoDetailsComponent
  },
  {
    path: 'todo-edit/:id', component: TodoEditComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
