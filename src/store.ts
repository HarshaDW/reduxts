import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer, FormStateMap } from 'redux-form'
import { todoListReducer } from './redux/todoList/reducer'
import { Todo } from './redux/todoList/actions'

export interface StoreState {
  form: FormStateMap
   // Make sure todoListReducer returns an array of Todo
  todos: Todo[]
 }

const reducers = {
  form: formReducer,
  todos: todoListReducer
}

const store = createStore(
  // Combine all reducers
  // Pass entire state combined reducers
  combineReducers<StoreState>(reducers),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
