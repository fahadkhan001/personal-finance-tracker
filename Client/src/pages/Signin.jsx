import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Signin = () => {
  return (
   
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='font-semibold text-center my-7 text-3xl'>Sign-in<span className='text-yellow-500 font-bold'> Kitchen Spurs Finance</span></h1>
    <form className='flex flex-col gap-4'>
    <div>
    <input className='border rounded-lg p-3' id='username' type='text' placeholder='username' />
    <FontAwesomeIcon icon= "Fa-sharp" />
    </div>
    <div>
    <input className='border rounded-lg p-3' id='email' type='email' placeholder='email' />
    </div>
    <div>
    <input className='border rounded-lg p-3' id='password' type='password' placeholder='password' />
    </div>

    
    <button  className='bg-yellow-500 font-semibold p-3 border rounded-lg uppercase hover:opacity-95 hover:scale-95 disabled:opacity-80'>sign up</button>
    </form>
    <div className='flex gap-2 mt-2'>
    <p className=''>Already have and account?</p>
    <Link to={'/sign-in'}>
    <span className='text-blue-700 '>Sign in</span>
    </Link>
    
    </div>
    </div>
    
  )
}

export default Signin