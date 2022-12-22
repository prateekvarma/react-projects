import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!name) {
      showAlert(true, 'danger','Cannot submit empty') // helper function
    } else if (name && isEditing) {
      // deal with edit
    } else {
      //show alert

      // add item to list
      const newItem = { 
        id: new Date().getTime().toString(),
        title: name
      }

      setList([...list, newItem])
      setName('')
    }
  }
  
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  return (
    <section className='section-center'>
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='grocery' placeholder='eg. eggs' />
          <button type="submit" className='submit-btn'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
        <List items={list} />
        <button className='clear-btn'>
          clear items
        </button>
      </div>
      )}
    </section>
  )
}

export default App
