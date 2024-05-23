import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    function handleIncrement()
    {
        dispatch({ type: 'INCREMENT' })
    }

    function handleDecrement()
    {
        dispatch({ type: 'DECREMENT' })
    }

    return (
        <div style={{
            flexDirection:'row',
            justifyContent:'space-between',
        }}>
            <p>Count: {state.count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default UseReducer;
