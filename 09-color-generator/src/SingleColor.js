import React, { useState, useEffect } from 'react'
//import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',') //converts the array into a comma separated list
  //const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`

  useEffect(() => {
    //to remove the copy to clipboard text after 3 secs
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [alert])

  return (
    //Below, checking if the index > 10 because it's the middle number, and changing text color to light because the late indexes are dark.
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hexValue) //this copies to clipboard
    }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard!</p>}
    </article>
  )
}

export default SingleColor
