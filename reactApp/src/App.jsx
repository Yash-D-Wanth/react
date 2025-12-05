import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example1 from './Components/Example1'
import Example2 from './Components/Example2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example2 name="Kaushik" />
      <Example1 name="Yashwanth" />
    </>
  )
}

export default App
