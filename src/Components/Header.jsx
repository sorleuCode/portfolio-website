import React, { useState } from 'react'
import Nav from './Nav'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Header = () => {
  const [nav, setNav] = useState(false)
  const navItems = [
    { id: 1, item: "Home", path: "home" },
    { id: 2, item: "About", path: "about" },
    { id: 3, item: "Experience", path: "experience" },
    { id: 4, item: "Contacts", path: "contacts" },
    { id: 5, item: "Portfolio", path: "portfolio" }
  ]

  return (
    <div className=' h-20 bg-gray-900 text-white no-underline mb-16 '>
      <div className='flex justify-between items-center p-2 boxShadow text-gray-300'>
        <div name="home">
          <h1 className='text-2xl cursor-pointer'><Link to='home' smooth duration={500}>sorleuCode</Link></h1>
        </div>
        <div>
          <Nav navItems={navItems} />
        </div>

        <div onClick={() => setNav(!nav)} className='cursor-pointer hover:text-white z-10 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (<ul className='menuItems flex flex-col absolute top-0 left-0 bg-gradient-to-b from-gray-950 to-gray-800 gap-4 w-full h-80 justify-center items-center font-mono'>
          {navItems.map((item) => (
            <li className='cursor-pointer  text-xl duration-200 hover:text-white hover:scale-100' key={item.id}><Link to={item.path} smooth duration={500}>
              {item.item}
            </Link></li>
          ))}
        </ul>)}


      </div>


    </div>
  )
}

export default Header
