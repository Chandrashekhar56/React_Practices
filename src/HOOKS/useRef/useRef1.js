import React, { useEffect, useState, useRef } from 'react'
 
export default function UseRef1() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => { previousInputValue.current = inputValue; }, [inputValue])

    return (
        <div>
            <br/>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value )} />
            <br/>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </div>
    )
}
