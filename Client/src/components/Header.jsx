import React from 'react'
import logo from '../assest/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-yellow-500' >
    <div className='flex flex-row items-center font-bold justify-between mx:auto p-3 '>
        <div className='flex gap-3 items-center self-center'>
            <img className='h-10 w-10 object-contain'  src={logo}  alt='logo' />
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
                    <span>Kithen</span>
                    <span>Spurs Finance</span>
                </h1>
        </div>
        <ul className=' flex flex-row gap-2'>
        <Link to={'/'}>
        <li className='hover:bg-blue-50'>Home</li>
        </Link>
        <Link to={'/about'}>
        <li className='hover:bg-blue-50'>About </li>
        </Link>
        <Link to={'/sign-in'}>
        <li className='hover:cursor-pointer'>Sign-In</li>
        </Link>
        
        </ul>
    </div>
    </header>
  )
}

export default Header