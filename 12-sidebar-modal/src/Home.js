import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  const data = useGlobalContext(); //calling the custom hook
  console.log(data)

  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='btn'>Show Modal</button>
    </main>
  )
}

export default Home
