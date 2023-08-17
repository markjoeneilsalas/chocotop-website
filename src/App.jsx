import { useState } from 'react'
import './App.css'
import Navhero from './components/navhero'
import Variants from './components/Variants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navhero />
      <Variants />
    </>
  )
}

export default App
