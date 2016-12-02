import { Component } from '@angular/core';
import {Observable} from 'rxjs';

import {Store} from '@ngrx/store';
import {ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE} from '../../Reducers/todo';

import {Todo} from '../../Models/index';

interface AppState {
  todos: Todo[];
}

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Observable<{}>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todo');
  }


  addTodo(str: string) {
    this.store.dispatch({type: ADD_TODO, payload: str});
  }

  toggleComplete(id: number){
    this.store.dispatch({type:TOGGLE_COMPLETE, payload: id});
  }

  deleteTodo(id: number){
    this.store.dispatch({type: DELETE_TODO, payload: id});
  }
}
