import { Fragment, useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Sidebar/>
    </Fragment>
  )
}

export default App
