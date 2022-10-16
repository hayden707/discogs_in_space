import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'

export default function Menu({ menuTrue }) {
  return (
    <div className="drop-menu bg-black h-screen">
      <ul className="menu-text text-lime-100">
        <NavLink to="/">
          <li onClick={menuTrue}>Search New Artist</li>
        </NavLink>
        <NavLink to="/about">
          <li onClick={menuTrue}>About</li>
        </NavLink>
      </ul>
    </div>
  )
}
