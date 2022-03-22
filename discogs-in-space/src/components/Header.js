import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="bg-black text-white">
      <nav className="flex justify-end pr-4">
        <NavLink to="/" className={'pr-4'}>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  )
}
