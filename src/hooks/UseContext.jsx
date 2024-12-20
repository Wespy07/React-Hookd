import React, { createContext, useContext, useState } from 'react'
const MainStateContext = createContext(null)

function UseContext() {
    const [isToggle, setIsToggle] = useState(false)

    return (
        <MainStateContext.Provider value={{ isToggle, setIsToggle }} >
            <h1>Parent Component</h1>
            < ChildToggle />
            < ChildDisplay />
        </MainStateContext.Provider>
    )
}

function ChildToggle() {
    const { setIsToggle } = useContext(MainStateContext)

    return (
        <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    )
}

function ChildDisplay() {
    const { isToggle } = useContext(MainStateContext)

    return (
        <h2>Current State: {isToggle ? 'ON' : 'OFF'} </h2>
    )
}

export default UseContext 