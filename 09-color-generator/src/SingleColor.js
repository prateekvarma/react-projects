import React, { useState, useEffect } from 'react'
//import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',') //converts the array into a comma separated list
  //const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`

  return (
    //Below, checking if the index > 10 because it's the middle number, and changing text color to light because the late indexes are dark.
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
    </article>
  )
}

export default SingleColor
