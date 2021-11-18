import { Todo, FetchTodosAction } from './actions'
import { TodoListActionTypes } from './actionsTypes'


export const todoListReducer = (
  state: Todo[] = [],
  action: FetchTodosAction
) => {
  switch (action.type) {
    case TodoListActionTypes.fetchTodos:
      return action.payload
    default:
      return state
  }
}
