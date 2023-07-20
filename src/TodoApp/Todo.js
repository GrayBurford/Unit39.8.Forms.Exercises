import React from 'react';
import './Todo.css';

function Todo ({ text, remove }) {

    return (
        <div className="Todo">
            {text}
            <button onClick={remove} className="Todo-remove">Remove</button>
        </div>
    )
}

export default Todo;
