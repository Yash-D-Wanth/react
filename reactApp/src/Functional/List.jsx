import React from 'react'
import Components from './Components'   
function List() {
    const characters=[{name:"jon snow",age:24,blood:"targaryen as well as stark"},
    {name:"arya stark",age:18,blood:"stark"},
    {name:"daenerys targaryen",age:22,blood:"targaryen"},
    {name:"tyrion lannister",age:32,blood:"lannister"}]
  return (
    <>
    {characters.map((character)=>(
        <Components name={character.name} age={character.age} blood={character.blood} key={character.name}/>
    ))}
    </>
  )
}

export default List