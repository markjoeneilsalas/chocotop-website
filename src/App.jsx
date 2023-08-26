import { useState } from 'react'
import './App.css'
import Navhero from './components/navhero'
import Variants from './components/Variants'
import Aboutus from './components/Aboutus'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navhero />
      <Variants />
      <Aboutus />
      <Carousel />
    </>
  )
}

export default App
