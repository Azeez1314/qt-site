import { useState } from 'react'

import { close, logo, menu } from '../../assets'
import { navLinks } from '../../constants'
import { NavLink } from "react-router-dom";


const Header = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className='w-full flex py-6 justify-between items-center navbar flex-wrap bg-fuchsia-950 p-6 overflow-hidden overflow-hidden'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      <div class="flex items-center flex-shrink-0 text-white mr-6">

  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    <NavLink to="/">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>
      </NavLink>
      <NavLink to="/about">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About Us
      </a>
      </NavLink>
      <NavLink to="/documentation">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Documentation
      </a>
      </NavLink>
       <NavLink to="/services">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Services
      </a>
      </NavLink>
    </div>
    <div>
      <NavLink to="/login">
      <a  href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-4">Login</a>
      </NavLink>
      <NavLink to="/signup">
      <a  href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign up</a>
      </NavLink>
    </div>
  </div>

    </nav>
    </>
  )
}

export default Header