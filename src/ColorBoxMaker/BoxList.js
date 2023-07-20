import React, {useState} from 'react';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';


// Box state goes here
// Renders all box components and NewBoxForm component
function BoxList () {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE)

    function addBox (newBox) {
        setBoxes(boxes => [...boxes, {...newBox, id : uuid() }])
    }

    function handleDelete (evt) {
        evt.target.parentElement.remove();
    }

    return (
        <div className="BoxList">
            <h1>BoxList App</h1>

            <NewBoxForm addBox={addBox} />

            {boxes.map(({backgroundColor, width, height, id}) => 
                <Box 
                    handleDelete={handleDelete}
                    backgroundColor={backgroundColor} 
                    height={height} 
                    width={width} 
                    key={id}
                    id={id}
                />
            )}
        </div>
    )
}

export default BoxList;
