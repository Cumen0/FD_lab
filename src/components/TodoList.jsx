import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function TodoList({ tasks, removeTask }) {
  return (
    <ListGroup className="mt-4">
      {tasks.map((task, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          {task}
          <Button variant="danger" onClick={() => removeTask(index)}>
            Remove
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;