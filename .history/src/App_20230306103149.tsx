import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const initialTodos: Todo[] = [
  {
    id: 1,
    text: "Morning run",
    completed: false,
  },
  {
    id: 2,
    text: "Stretching",
    completed: false,
  },
  {
    id: 3,
    text: "90 minutes of focused coding",
    completed: false,
  },
  {
    id: 4,
    text: "Breakfast",
    completed: false,
  },
  {
    id: 5,
    text: "10 minute walk",
    completed: false,
  },
  {
    id: 5,
    text: "Now we begin",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
      const newTodoItem: Todo = {
        id: newId,
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    ;
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new to-do item"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default App;
