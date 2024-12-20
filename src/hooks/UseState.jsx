import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)


    // let count = 0;
    function incrementor() {
        // count += 1
        setCount((prev) => prev + 1)
        console.log(count)
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={incrementor}>increment</button>
        </>
    )
}

export default UseState