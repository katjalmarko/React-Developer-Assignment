import React from 'react'

const ToDoItem = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.date.toLocaleString()}</p>
        <button onClick={() => deleteTask(task.id)}>
           X
        </button>
    </div>
  )
}

export default ToDoItem