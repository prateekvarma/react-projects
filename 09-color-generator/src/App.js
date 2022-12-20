import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js' // from the library

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10) //this is the API lib interaction
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" className={`${error ? 'error' : null}`} />
          <button type="submit" className='btn'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          //the hexColor is unusual here. For some reason, hex was not passing manually to the child component
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
    </>
  )
}

export default App
