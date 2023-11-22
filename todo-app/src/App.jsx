import { useState } from 'react'
import {Header} from './components/header'
import {Task} from './components/task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Task/>
    </>
  )
}

export default App
