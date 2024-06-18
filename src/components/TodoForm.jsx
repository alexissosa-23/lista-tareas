import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Agregar tarea"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
