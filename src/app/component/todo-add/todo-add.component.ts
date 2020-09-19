import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoModel} from '../model/todo.model';
import {TodoService} from '../../service/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });

  constructor(private todoservice: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const value: TodoModel = this.todoForm.value;
    this.todoservice.addTodo(value).subscribe(() => {
      this.router.navigate(['/', 'todos']);
    });
  }

}
