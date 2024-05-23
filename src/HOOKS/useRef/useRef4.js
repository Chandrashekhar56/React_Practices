import React, { useRef, useState } from 'react'

const data = {
    "ruler": "Alexander the Great",
    "reign": "Prosperous, marked by unity and well-being",
    "landscape": ["Forests", "Fields", "Mountains"],
    "citizens": "Harmonious living, admiration for the king",
    "crisis": "Neighboring kingdom declares war",
    "king's response": "Attempts diplomatic resolution, then mobilizes armies",

    "war": {
        "description": "Fierce and challenging",
        "king's role": "Leads from the front lines, inspires troops",
        "citizens' response": "Rally behind the king",
        "decisive battle": "Eldoria emerges victorious",
    },

    "post-war": {
        "rebuilding": "Focus on healing and reconstruction",
        "policies": "Implemented for the welfare of affected citizens",
        "diplomacy": "Efforts to foster alliances and strengthen regional standing",
    },

    "legacy": {
        "rule": "Continued with wisdom and compassion",
        "endurance": "Remembered as a great leader through generations",
    }
};

function UseRef4() {
    const inputRef = useRef();
    const handleClick = () => {
        const dataString = JSON.stringify(data, null, 2);

        inputRef.current.innerText =dataString;
    };
    return (
        <div>
            <p ref={inputRef}></p>
            <button onClick={handleClick} >Click</button>
        </div>
    )
}

export default UseRef4
