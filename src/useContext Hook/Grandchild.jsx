import React, { useContext } from 'react'
import { BoolContext } from './Parent'

function Grandchild() {
    const {surname} = useContext(BoolContext)
    return (
        <>
            <h3>Jake {surname}</h3>
        </>
    )
}

export default Grandchild