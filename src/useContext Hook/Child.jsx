import React, { useContext } from 'react'
import Grandchild from './Grandchild'
import { BoolContext } from './Parent'

function Child() {
    const { surname } = useContext(BoolContext)
    return (
        <>
            <h2>Jane {surname}</h2>
            < Grandchild />
        </>
    )
}

export default Child