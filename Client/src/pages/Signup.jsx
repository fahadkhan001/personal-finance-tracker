import React, { useState,  } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";
import Oauth from '../components/Oauth';



const Signup = () => {
    const [formData, setFormData] = useState({});
    const [loading,setLoading] = useState(false) ;
    const [error,setError] = useState(null) ;

    const navigate = useNavigate();

const handleChange =(e)=>{
    setFormData({
        ...formData,
        [e.target.id] : e.target.value,
    })
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
        setLoading(true);
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData)
        })
        const data = await res.json();
        console.log(data);
        if(data.success == false){
            setError(data.message);
            setLoading(false);
            return;
        }
        setLoading(false);
        setError(null)
        navigate('/sign-in');


    } catch (error) {
        setLoading(false);
        setError(error.message)
    }

    
}


  return (
   
    <div className='text-black h-[80vh] flex justify-center items-center bg-cover '>
    <div className='p-3 max-w-lg mx-auto border-[1.5px] items-center justify-center  rounded-lg border-black mt-3 shadow-md hover:shadow-lg hover:scale-105 transition-shadow overflow-hidden  w-full sm:w-[500px] h-[500px] '>
    <h1 className='font-semibold text-center my-7 text-3xl'>Sign-up<span className='text-yellow-500 font-bold'> Kitchen Spurs Finance</span></h1>
    
    <form  onSubmit={handleSubmit} className='flex flex-col gap-4  items-center'>
    
    <div className='flex flex-col gap-2 items-center' >
    <div className='flex items-center'>
    <input className='border rounded-lg p-3  w-[450px]' id='username' type='text' placeholder='username' onChange={handleChange} />
    <FaUser className='relative right-8'  />
    </div>
    <div className='flex items-center'>
    <input className='border rounded-lg p-3 w-[450px]' id='email' type='email' placeholder='email' onChange={handleChange} />
    <FaEnvelope className='relative right-8' />
    </div>
    
    <div className='flex  items-center'>
    <input className='border rounded-lg p-3 w-[450px]' id='password' type='password' placeholder='password' onChange={handleChange} />
    <FaLock className='relative right-8  ' />
    </div>
    </div>


    <button disabled={loading}  className='bg-yellow-500 w-[450px] font-semibold p-3 border rounded-lg uppercase hover:opacity-95  disabled:opacity-80'>{loading ? "Loading..." :"Sign up"}</button>
    <Oauth />
    </form>
    <div className='flex  gap-2 mt-2 '>
    <p >Already have and account?</p>
    <Link to={'/sign-in'}>
    <span className='text-blue-700 '>Sign in</span>
    </Link>
     </div>
     
     </div>
    </div>
    
  )
}

export default Signup;