import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {TodoModel} from '../component/model/todo.model';

const TODO_ENDPOINT = '/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  public getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${environment.api_base}${TODO_ENDPOINT}`);
  }

  public addTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(`${environment.api_base}${TODO_ENDPOINT}`, todo);
  }

  public getTodo(id: string): Observable<TodoModel> {
    return this.http.get<TodoModel>(`${environment.api_base}${TODO_ENDPOINT}/${id}`);
  }

  public updateTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.put<TodoModel>(`${environment.api_base}${TODO_ENDPOINT}`, todo);
  }
}
