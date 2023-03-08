import React from 'react'

const ToDoItem = () => {
  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.date.toLocaleString()}</p>
        <button onClick={() => deleteTask(task.id)}>
           X
        </button>
    </div>
  )
}

export default ToDoItem