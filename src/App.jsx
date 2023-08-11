import { useState } from 'react'
import './App.css'
import Navhero from './components/navhero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navhero />
    </>
  )
}

export default App
