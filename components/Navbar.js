import React from 'react'
import { nav } from "../pages/data.js";

function Navbar() {
  return (
    <nav className='hidden lg:flex'>
    <ul className='flex gap-x-8'>
    {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a className='' href={item.href}>{item.name}</a>
            </li>
          );
        })}
    </ul>
    </nav>
  )
}

export default Navbar
