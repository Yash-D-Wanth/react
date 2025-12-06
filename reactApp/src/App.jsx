

// import Props from './Functional/Props'
// import State from './Functional/State'
// import Conditional from './Functional/Conditional'
// import Event from './Functional/Event'
// import Array from "./Functional/Array"
import Objects from "./Functional/Objects"
function App() {
    // const person=["davy D jones","joyboy","monkey D luffy"]
    const characters={
      name:"jon snow",
      age:24,
      blood:"targaryen",
    }
  return (
    <>
      {/* <Props name="React Develope */}
      {/* <State /> */}
      {/* <Event /> */}
        {/* <Conditional /> */}
        {/* <Array person={person}/> */}
        <Objects characters={characters}/>
    </>
  )
}

export default App
