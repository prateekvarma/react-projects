import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  const { openModal } = useGlobalContext(); //calling the custom hook

  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>Show Modal</button>
    </main>
  )
}

export default Home
