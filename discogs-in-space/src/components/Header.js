import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'
import './Header.css'

export default function Header() {
  const [menu, setMenu] = useState(true)

  const menuFalse = () => {
    setMenu(false)
    document.body.style.overflow = 'hidden'
  }

  const menuTrue = () => {
    setMenu(true)
    document.body.style.overflow = 'visible'
  }

  return (
    <div className="bg-lime-100" /* className="bg-black text-white" */>
      {/* <nav className="flex justify-end pr-4">
        <NavLink to="/" className={'pr-4'}>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </nav> */}
      {menu ? (
        <div className="flex justify-end pt-4 pr-4">
          <div onClick={menuFalse} className="space-y-2">
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
          </div>
        </div>
      ) : (
        <div className="bg-black">
          <p
            className="menu-close text-lime-100 text-right mr-9"
            onClick={menuTrue}
          >
            X
          </p>
          <Menu menu={menu} menuFalse={menuFalse} menuTrue={menuTrue} />
        </div>
      )}
    </div>
  )
}
