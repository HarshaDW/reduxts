import { Todo } from './actions'
import { TodoListActionTypes, Action } from './actionsTypes'


export const todoListReducer = (
  state: Todo[] = [],
  action: Action
) => {
  switch (action.type) {
    case TodoListActionTypes.fetchTodos:
      return action.payload
    case TodoListActionTypes.deleteTodo:
        return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}
