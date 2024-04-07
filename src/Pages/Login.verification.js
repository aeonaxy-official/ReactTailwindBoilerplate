import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import img from "../assets/inbox.png"
const LoginVerification = () => {
  return (
    <div>
      <Header />
      <div className='flex items-center justify-center flex-col px-2 w-full lg:w-1/2 m-auto text-gray-600 py-12'>
        <h1 className='text-2xl lg:text-3xl font-bold font-italianno-cedarville-cursive-regu text-black py-4'>Please verify your email...</h1>
        <img src={img} alt="" />
        <p className='py-2'>Please verify your email address . We've sent a confirmation email to:</p>
        <h4 className='font-bold text-black py-4'>account@refero.design</h4>
        <p className='py-2 pb-4'>Click the confirmation link in that email to begin using Dribble</p>
        <h3>Didn't receive the email ? Check your spam folder , it may have been caught by a filter . If you still don;t see it , you can <span className='text-pink-600 hover:underline hover:cursor-pointer'> resend the confirmation email.</span></h3>
        <p className='py-4'>Wrong email address? <span className='text-pink-600 hover:underline hover:cursor-pointer'>Change it</span></p>
      </div>
      <Footer />
    </div>
  )
}

export default LoginVerification