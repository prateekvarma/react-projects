import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    //Below, we're able to use 'removeAlert', as in the parent component,
    // the 'showAlert' has default 'show = false'
    const timeout = setTimeout(() => removeAlert(), 3000)

    return () => clearTimeout(timeout)
  }, [removeAlert])

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
