import React, {useState} from 'react';
import './TodoList.css';
import Todo from './Todo.js';
import NewTodoForm from './NewTodoForm';
import {v4 as uuid} from "uuid";

function TodoList () {
    const INITIAL_STATE = [];
    const [todos, setTodos] = useState(INITIAL_STATE);


    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo ]);
    }


    const remove = (evt) => {
        evt.target.parentElement.remove();
    }


    const allTodos = todos.map(todo =>
        <Todo 
            text={todo.task}
            remove={remove}
            key={uuid()}
        />
    )

    return (
        <div className="TodoList">
            <div className='TodoList-form'>
                <NewTodoForm addTodo={addTodo}/>
            </div>
            <div className="TodoList-todos">
                {allTodos}
            </div>
        </div>
    )
}

export default TodoList;