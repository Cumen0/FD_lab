import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-5 rounded-sm bg-opacity-75">
      <h1>Todo App</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default TodoApp;