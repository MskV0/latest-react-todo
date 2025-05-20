import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onDelete, onToggleComplete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        No tasks yet. Add some tasks to get started!
      </div>
    );
  }
  
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;