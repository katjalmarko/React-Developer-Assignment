import React from 'react'

const ToDoItem = (props) => {
  return (
    <div>
      {props.toDoList.map((props.task) => {
          return (
            <div>
              <h1>{props.task.title}</h1>
              <p>{props.task.description}</p>
              <p>{props.task.date.toLocaleString()}</p>
              <button onClick={() => props.deleteTask(props.task.id)}>
                X
              </button>
              </div>
            )})}
    </div>
  )
}

export default ToDoItem