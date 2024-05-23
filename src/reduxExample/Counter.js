import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div style={{
            margin: 'auto', 
            marginTop: 200,
        }}>
            <div>
                <span>{count}</span>
            </div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}