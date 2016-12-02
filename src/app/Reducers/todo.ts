import {ActionReducer, Action} from '@ngrx/store';

import {Todo} from '../Models/index';

export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";


const todoDetails = (state, action) => {
  switch (action.type) {
    case TOGGLE_COMPLETE:
      if (state.Id === action.payload) {
        return Object.assign({}, state, { IsComplete: !state.IsComplete });
      }
      return state;

    default:
      return state;
  }
};


export const todoReducer: ActionReducer<Todo[]> = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case TOGGLE_COMPLETE:
      return state.map(todo => todoDetails(todo, action));

    case ADD_TODO:
      return [
        ...state, Object.assign({}, { Description: action.payload, IsComplete: false, Id: state.length + 1 })
      ];

    case DELETE_TODO:
      return state.filter(x => x.Id == action.payload);

    default:
      return state;
  }
}
