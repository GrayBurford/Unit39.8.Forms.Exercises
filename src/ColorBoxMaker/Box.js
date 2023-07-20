import React from 'react';
import './Box.css';

// Displays a div with backgroundColor, width, and height based on props passed to it
function Box ({ handleDelete, backgroundColor, width, height, id }) {
    width = `${width}px`;
    height = `${height}px`;

    return (
        <div 
            className="Box"
            style={{ backgroundColor, width, height }}
        >
            
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Box;