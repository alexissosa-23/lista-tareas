import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <p style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none',
                flexGrow: 1 
            }}>
                {todo.task}
            </p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
