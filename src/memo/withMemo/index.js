import React from 'react'
import { useState } from "react";
import Todos from './todo';

function WithMemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    return (
        <div>
            <Todos todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default WithMemo