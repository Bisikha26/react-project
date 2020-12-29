import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
    // console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo setTodos={setTodos} key={todo.id} text={todo.text} id={todo.id} todo={todo} todos={todos}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;