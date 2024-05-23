import React, { useRef } from 'react'
import Child from './child'

function Parent() {

    const inputRef = useRef(null);

    function handlClick()
    {
        inputRef.current.value="10000000";
        inputRef.current.style.color="white";
        inputRef.current.style.background="black";

    }

    return (
        <div>
            <h1>forwarRef use ?</h1>
            <Child ref={inputRef}/>
            <button onClick={handlClick}>Update InputBox</button>
        </div>
    )
}

export default Parent