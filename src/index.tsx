import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import TodoList from './components/TodoList'


export const App = () => {
  return <div>
    <TodoList />
  </div>
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
