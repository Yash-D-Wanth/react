import React from 'react'
import {useState} from 'react'
function State() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>count :{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default State