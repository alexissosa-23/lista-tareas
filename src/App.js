import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (task) => {
        setTodos([...todos, { id: Date.now(), task, completed: false }]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <h1>Lista de tareas</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={todos} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} 
            />
        </div>
    );
};

export default App;
