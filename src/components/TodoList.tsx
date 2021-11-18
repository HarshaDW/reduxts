import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodoList } from '../redux/todoList/actions'
import { StoreState } from '../store'

interface Props {
  todos?: Todo[]
  fetchTodos?: () => void
}

const TodoList = (props: Props) => {
    console.log('props', props);
  return <div></div>
}

const mapStateToProps = ({ todos }: StoreState) => {
  return {
    todos,
  }
}


export default connect(mapStateToProps, {fetchTodoList})(TodoList)
