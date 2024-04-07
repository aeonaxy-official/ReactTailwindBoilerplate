import React, { useState } from 'react'
import img from "../assets/login-bg.png"
import { useNavigate } from 'react-router-dom';
import Dribble from '../assets/dribble';

const Login = () => {
  const [data, setData] = useState({ name: "", username: "", email: "", password: "" })
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.name === "" || data.username === "" || data.email === "" || data.password === "") {
      alert("Provide all data")
    }
    else {
      if (data.name === data.username) {
        setError(true)
      }
      navigate("/profile")
    }
    setData({ name: "", username: "", email: "", password: "" });

  }

  return (
    <div className='flex gap-4'>
      {/* left side */}
      <div className='hidden lg:block flex item-center justify-center w-[40%] bg-orange-300/100 h-screen px-4'>
        <p className='italic my-6 ml-12'>
          <Dribble pink="pink"/>
        </p>
        <h3 className='text-4xl text-orange-900/60  ml-12 -mb-12 font-bold'>Discover the world's top Designer & Creatives </h3>
        <img src={img} className='w-full h-auto' alt="sign-in" />
        <p className='-mt-6'>art by <span className='underline'>Peter Tarka</span></p>
      </div>

      {/* right side */}
      <div className='w-full lg:w-[60%]'>
        <div className=' w-full'>
          <p className='flex items-center justify-end p-5'>Already a member ? <span className='text-violet-600'>Sign In</span></p>
        </div>
        <div className='flex flex-col py-4 items-left justify-left  text-left px-2 lg:px-56 gap-4'>
          <h1 className='text-3xl py-2 font-bold'>Sign Up to Dribble</h1>
          <p className={error ? 'text-red-300 block flex items-center gap-2' : 'hidden'}> <span>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-2 h-2' viewBox="0 0 512 512"><path fill="#d70f2d" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
          </span> Username has already been taken</p>
          <form className='w-full gap-6 flex flex-col items-start mt-4' onSubmit={handleSubmit}>
            <div className='flex w-full gap-6'>
              <div className='flex flex-col w-full'>
                <label className='font-bold' htmlFor="name">Name</label>
                <input type="text" name='name' onChange={handleInputChange} value={data.name} placeholder='name'
                  className='w-full bg-gray-200/100 rounded-md p-2'
                />
              </div>
              <div className='flex flex-col w-full'>
                <label className='flex items-center font-bold' htmlFor="name"> <span className={error ? 'text-red-300 block' : 'hidden'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4'><path width={12} height={12} fill="#c00231" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
                </span> Username</label>
                <input type="text" name='username' onChange={handleInputChange} value={data.username} placeholder='Enter username' className={error ? 'w-full bg-red-100 text-[#c00231] rounded-md p-2' : 'w-full bg-gray-200 rounded-md p-2'} />
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <label className='font-bold' htmlFor="email">Email</label>
              <input type="email" name='email' onChange={handleInputChange} value={data.email} className='w-full bg-gray-200 rounded-md p-2' placeholder='account@refero.design' />
            </div>
            <div className='flex flex-col w-full '>
              <label className='font-bold' htmlFor="name">Password</label>
              <input type="password" name='password' onChange={handleInputChange} value={data.password} className='w-full bg-gray-200 rounded-md p-2' placeholder='6+ charachter' />
            </div>
            <div class="flex">
              <div class="flex items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" class="w-5 h-5 mt-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div class="ms-2">
                <label htmlFor="helper-checkbox" className="text-md"><p>Creating an account means you're okay with our <span className='text-violet-600 '>Terms of Service Privacy Policy ,</span> and our default <span className='text-violet-600 '>Notification Settings</span></p></label>
              </div>
            </div>
            <button className='bg-pink-600 hover:bg-pink-300 text-white px-6 py-2 font-bold text-center rounded-md'>Create Account</button>
            <p className='text-sm text-gray-400'>This site is protected by reCAPTCHA and the Google <span className='text-violet-600 '>Privacy Policy</span> and <span className='text-violet-600 '>Terms of Service </span> apply</p>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login