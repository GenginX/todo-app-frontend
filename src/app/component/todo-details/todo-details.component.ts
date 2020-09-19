import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {TodoModel} from '../model/todo.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  public todo: TodoModel = null;

  constructor(private todoService: TodoService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        this.todoService.getTodo(params['id']).subscribe((todo) => {
          this.todo = todo;
        });
      }
    });
  }

}
