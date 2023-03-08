import React from 'react'
import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  date: Date;
}

const ToDoList = () => {

  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newDate, setNewDate] = useState("")
  const [toDoList, setToDoList] = useState<Todo[]>([])

  
  return (
    <div>

    </div>
  )
}

export default ToDoList