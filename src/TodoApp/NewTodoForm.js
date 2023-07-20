import React, { useState } from 'react';
import './NewTodoForm.css';


function NewTodoForm ({ addTodo }) {
    const INITIAL_STATE = { task : "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    function handleChange (evt) {
        const { name, value } = evt.target;
        setFormData({ [name] : value })
        // setFormData((formData) => ({...formData, [name] : value }))
    }

    function handleSubmit (evt) {
        evt.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor='task'>Add task</label>
            <input 
                id='task'
                name='task'
                type='text' 
                placeholder='type to-do here'
                value={formData.task}
                onChange={handleChange}
            />
            <button>Submit To-Do</button>
        </form>
    )
}


export default NewTodoForm;