import { fetchTodoList, deleteTodo } from '../redux/todoList/actions'
import { StoreState } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {
  const state = useSelector((state: StoreState) => state.todos)
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(fetchTodoList())
  }

  const handleDelete = (toDoID: number) => {
      dispatch(deleteTodo(toDoID))
  }

  return (
    <div>
      <button onClick={handleOnClick}>Fetch Todos</button>
      {state &&
        state.map((todo) => {
          return (
            <div>
              <p key={todo.id}>{todo.title}</p>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          )
        })}
    </div>
  )
}

export default TodoList
