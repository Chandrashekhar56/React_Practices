import React from 'react';

function Child(props) {

    const {value, callback} = props || {};
    const handleClick = () => {
        callback();
    };
    
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Child;
