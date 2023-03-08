import React from 'react'

const ToDoItem = (props) => {
  return (
    <div>
      {props.toDoList.map((props.task) => {
          return (
            <div>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
              <p>{props.date.toLocaleString()}</p>
              <button onClick={() => props.deleteTask(props.id)}>
                X
              </button>
              </div>
            )})}
    </div>
  )
}

export default ToDoItem