import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'doubleIt':
            return { count: state.count * 2 }
        default:
            return state
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'doubleIt' })}>*</button>
        </div>
    )
}

export default UseReducer