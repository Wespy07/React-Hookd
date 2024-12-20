import React, { createContext, useState } from 'react'
import Child from './Child'

const BoolContext = createContext(null)

function Parent() {
    const [surname, setSurname] = useState('Doe')

    return (
        <BoolContext.Provider value={{ surname, setSurname }}>
            <h1>John {surname} </h1>
            < Child />
        </BoolContext.Provider>
    )
}

export default Parent
export {BoolContext}