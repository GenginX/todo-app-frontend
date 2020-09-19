import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoModel} from '../model/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  public todoForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });

  constructor(private todoservice: TodoService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        this.todoservice.getTodo(params['id']).subscribe((todo) => {
          this.updateProfile(todo);
        });
      }
    });
  }

  onSubmit(): void {
    const value: TodoModel = this.todoForm.value;
    this.todoservice.updateTodo(value).subscribe(() => {
      this.router.navigate(['/', 'todos']);
    });
  }

  updateProfile(todo: TodoModel) {
    this.todoForm.patchValue(
      todo);
  }
}
