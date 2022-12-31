import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

//This component is the menu that opens when hovering over a link on the nav
const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location //coming from the context API
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu' }`} ref={container}>
      DUMMY SUBMENU TEXT
    </aside>
  )
}

export default Submenu
