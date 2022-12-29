import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext(); //calling the custom hook

  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'} `}>
      <div className='modal-container'>
        <h3>Model Content</h3>
        <button onClick={closeModal} className='close-modal-btn'>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
