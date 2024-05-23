import React, { useEffect, useState } from 'react'

export default function UseEffect1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000)
    },
    [count]);
    //useEffect(()=>{setTimeout(()=>{setCount(()=>)},)}.[]); 
    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    )
}
