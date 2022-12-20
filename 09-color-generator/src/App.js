import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js' // from the library

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handle submut')
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.event.target.value)} placeholder="#f15025" />
          <button type="submit" className='btn'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        <h4>list goes here</h4>
      </section>
    </>
  )
}

export default App
