import { FetchTodosAction, DeleteTodoAction } from "./actions";

export enum TodoListActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;