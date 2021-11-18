import axios from 'axios'
import { Dispatch } from 'redux'
import { TodoListActionTypes } from './actionsTypes'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: TodoListActionTypes.fetchTodos
  payload: Todo[]
}

export const fetchTodoList = () => {
  return async (dispatch: Dispatch) => {
    const url =  'https://jsonplaceholder.typicode.com/todos'
    const response = await axios.get<Todo[]>(url)

    dispatch<FetchTodosAction>({
      type: TodoListActionTypes.fetchTodos,
      payload: response.data,
    })
  }
}
