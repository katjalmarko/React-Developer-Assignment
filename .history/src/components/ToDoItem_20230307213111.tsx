import React from 'react'
import { Todo } from './ToDoList'

type Props {
  deleteTask: any;
}

const ToDoItem = (props: Todo) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.date.toLocaleString()}</p>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
}

export default ToDoItem