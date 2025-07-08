import { useState } from 'react'
import Home from './components/Home.jsx'
import Stopwatch from './components/Stopwatch.jsx'
import Timer from './components/Timer.jsx'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'home') {
    return (
      <Home page={page} setPage={setPage}/>
    )
  } else if (page === 'stopwatch') {
    return (
      <Stopwatch page={page} setPage={setPage}/>
    )
  } else if (page === 'timer') {
    return (
      <Timer page={page} setPage={setPage}/>
    )
  }
}

export default App
