import React from 'react'
import logo from '../assest/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  const {currentUser}= useSelector(state=>state.user)

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
        <li className='hover:bg-blue-50'>About</li>
        </Link>
        <Link to={'/profile'}>
        {currentUser ? (
          <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
        ): (
          <li className=' text-gray-50 hover:bg-emerald-700' >Sign-In</li>
      )}
      </Link>
        
        </ul>
    </div>
    </header>
  )
}

export default Header