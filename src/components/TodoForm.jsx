import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TodoForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && task.length <= 10) {
      addTask(task);
      setTask('');
    } else {
      alert('Task cannot be more than 10 characters');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTask">
        <Form.Label>New Task</Form.Label>
        <Form.Control
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          maxLength="10"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Add Task
      </Button>
    </Form>
  );
}

export default TodoForm;