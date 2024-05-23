import React, { useMemo, useState } from 'react'

function UseMemoExample1() {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(1);

    const sum = useMemo(() => {
        return number1 + number2;
    }, [number1, number2]);

    return (
        <div >
            <h1>Number1: {number1}</h1>
            <h1>Number2: {number2}</h1>
            <h1>sum: {sum}</h1>
            <button onClick={() => setNumber1((prev) => prev + 1)}>Click Increment number1 </button>
            <button onClick={() => setNumber2((prev) => prev - 1)}>Click Increment number2 </button>

        </div>
    )
}

export default UseMemoExample1
