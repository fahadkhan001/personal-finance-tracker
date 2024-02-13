import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <div className='p-5 gap-4'>
    <div className='p-3 flex flex-col gap-2'>
    <h1 className='font-bold text-xl'>About Us</h1>
    <h2 className='font-semibold'>Welcome to KitchenSpurs Finance</h2>
    <div>
<p className=''>At KitchenSpurs Finance, we believe that taking control of your finances is the first step towards achieving financial freedom and peace of mind. Our platform is designed to empower individuals like you to manage your money effectively, make informed financial decisions, and work towards your financial goals.
</p>
</div>
<div >
<h2 className='font-bold flex'>Our Mission
</h2>
<p className=''> To provide you with the tools and resources you need to take control of your finances, no matter where you are on your financial journey. Whether you're just starting out and looking to build a budget, or you're a seasoned investor aiming to optimize your portfolio,KitchenSpurs Finance is here to help you every step of the way.</p>

</div>
</div>  
</div> 
<Footer />  
</>
  )
}

export default About