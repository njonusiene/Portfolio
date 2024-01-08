import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to="/" className='title'>Home</Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/About" >About</NavLink>
                </li>
            <li>
                <NavLink to="/Project">Projects</NavLink>
                </li>
            <li>
                <NavLink to="/Contact">Contact</NavLink>
                </li>
        </ul>
    </nav>
  )
}

export default Navbar
