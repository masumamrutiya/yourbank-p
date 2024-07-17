import { useState } from 'react'
import Navber from './Navber'
import Container from './Container'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
     <Navber/>
     </header>
     <Container/>
     <footer>
      <Footer/>
     </footer>
    </>
  )
}

export default App
