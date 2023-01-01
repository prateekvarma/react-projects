import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

//This component is the menu that opens when hovering over a link on the nav
const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2') //default as 2 columns
    const submenu = container.current
    const { center, bottom } = location //coming from the context API
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if(links.length === 3) {
      setColumns('col-3')
    }
    if(links.length > 3) { //if there are more than 3 links, keep a max of 4 columns
      setColumns('col-4')
    }

  }, [location, links])

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu' }`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return <a key={index} href={url}>{icon} {label}</a>
        })}
      </div>
    </aside>
  )
}

export default Submenu
