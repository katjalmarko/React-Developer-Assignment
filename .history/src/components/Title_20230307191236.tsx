import React from 'react'
import { useState } from 'react';

const Title = (props) => {

  const [newTitle, setNewTitle] = useState("")

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }


  return (
    <div className='ToDo'>
            <form onSubmit={confirmTask}>
      <input type="text"
             value={newTitle}
             placeholder="Type your task"
             onChange={handleTitle}
             />
      <input type="text"
             value={newDescription}
             placeholder="Type your description"
             onChange={handleDescription}
             />     
      <input type="datetime-local" 
             value={newDate}
             placeholder={"Set Date"}
             onChange={handleDate}
             />         
      <button onClick={addTask}>
        Add Task
      </button>    
      </form>
      
      <div>
        
        {toDoList.map((task) => {
          return (
            <div>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <p>{task.date.toLocaleString()}</p>
              <button onClick={() => deleteTask(task.id)}>
                X
              </button>
              </div>
            )})}
      
      </div>
    </div>
  )
}

export default Title