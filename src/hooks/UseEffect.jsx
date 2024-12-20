import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [mainData, setMainData] = useState([])
    const [name, setName] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setMainData(data))
    }, [])

    useEffect(()=> {
        console.log('test name')
    })

  return (
    <>
        <button onClick={() => setName((prev) => !prev)}>toggle name</button>
        <h1>posts</h1>
        <ul>
            {mainData.map((item, i) => <li key={i}>{item.title}</li> )}
        </ul>
    </>
  )
}

export default UseEffect