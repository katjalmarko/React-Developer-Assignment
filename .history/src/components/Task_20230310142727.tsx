import React from 'react'
import './Task.css'
import { useState } from 'react';


interface Todo {
  id: number,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}



const Task = () => {
  return (
    <div>Task</div>
  )
}

export default Task