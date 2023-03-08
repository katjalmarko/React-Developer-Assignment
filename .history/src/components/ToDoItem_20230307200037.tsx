import React from 'react'
import ToDoList from './ToDoList'

const ToDoItem = (props) => {
  return (
    <div>
      {ToDoList.toDoList.map((props) => {
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