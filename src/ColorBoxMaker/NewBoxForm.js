import React, {useState} from 'react';
import './NewBoxForm.css';

// should render a form that when submitted, creates a new Box. Can specify Box’s width, height, and background color. When the form is submitted, clear the input values.
function NewBoxForm ({ addBox }) {
    const INITIAL_STATE = {
        backgroundColor : "",
        width : "50",
        height : "50"
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    function handleChange (evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({...formData, [name] : value }))
    }

    function handleSubmit (evt) {
        evt.preventDefault();
        addBox({...formData});
        console.log({...formData});
        setFormData(INITIAL_STATE)

    }

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="backgroundColor">Background Color</label>
                <select id="backgroundColor" name="backgroundColor" onChange={handleChange}>
                    <option value="">-- choose a color --</option>
                    <option value="black">Black</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                </select>
            </div>

            <div>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    name="height"
                    placeholder="Box Height"
                    value={formData.height}
                    type="range"
                    min="50"
                    max="300"
                    step="25"
                    onChange={handleChange}
                /> ({formData.height})
            </div>

            <div>
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    name="width"
                    placeholder="Box Width"
                    value={formData.width}
                    type="range"
                    min="50"
                    max="300"
                    step="25"
                    onChange={handleChange}
                /> ({formData.width})
            </div>

            <button>Add Box</button>
        </form>
    )

}   

export default NewBoxForm;
