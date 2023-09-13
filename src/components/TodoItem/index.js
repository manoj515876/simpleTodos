import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="list-card">
      <p className="para">{title}</p>
      <button className="card-btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
