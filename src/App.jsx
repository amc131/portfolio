import { useState } from 'react'
import Nav from './components/Nav'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
    </div>
  )
}

export default App
