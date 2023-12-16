import React, { useState } from 'react'
import './App.css'
import Counter from './componenet/Counter/Counter'


function App() {

  const [showCounter, setShowCounter] = useState(false);

  // function mount () {
  //   setShowCounter(!showCounter)
  // }
  return (
    <div className='app'>
      <div>
        <button onClick={() => setShowCounter(true)}>Mount</button>
        <button onClick={() => setShowCounter(false)}>Unmount</button>
      </div>
      {
        showCounter && <Counter/> // This line means that if showCounter is true than only show the counter app
      }
    </div> 
  )
}

export default App
