import React from 'react'
import {useState} from 'react'
function Event() {
    const [Count, setCount] = useState(0)
    // increament=increament.bind(this)
    // function increament(){
    //     setCount(Count + 1)
    // }
  return (
    <>
     <h1>count : {Count}</h1>
        <button onClick={()=>setCount(Count+1)}>Increase</button>
    </>
  )
}

export default Event