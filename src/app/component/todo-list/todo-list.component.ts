import {Component, OnInit} from '@angular/core';
import {TodoModel} from '../model/todo.model';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: TodoModel[] = [];

  constructor(
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (todos) => {
        this.todos = todos;
      }
    );
  }

}
