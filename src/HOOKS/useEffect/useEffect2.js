import React, { useEffect, useState } from 'react'

export default function UseEffect2() {
    const [count, setCount] = useState(0);

    useEffect(() => 
    { let timer = setTimeout(() => 
        { setCount((count) => 
            count + 1); }, 10); return () =>
             clearTimeout(timer) }, 
    [count]);
    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    )
}
