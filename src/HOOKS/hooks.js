import React, { useState } from 'react';

export default function Hooks() {

    const [color, setColor] = useState("red");

    return (
        <div>
            <h1 style={{ color, fontSize: '70px', backgroundColor: 'black' }}>My favorite Color is {color}! </h1>
            <br />
            <button type='button' onClick={() => setColor("blue")}>Blue</button>
            <button type='button' onClick={() => setColor("white")}>White</button>
            <button type='button' onClick={() => setColor("yellow")}>Yellow</button>
            <button type='button' onClick={() => setColor("green")}>Green</button>
            <button type='button' onClick={() => setColor("orange")}>Orange</button>
            <button type='button' onClick={() => setColor("violet")}>Violet</button>
            <button type='button' onClick={() => setColor("red")}>Red</button>
        </div>
    );
}
