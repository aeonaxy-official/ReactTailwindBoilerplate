import React from 'react'
import Navbar from './navbar'
import ImageOne from '../../assets/img1.jpg'
import User from '../../assets/p1.jpg'

const Header = () => {
  return (
    <>
        <Navbar/>


        <div className='max-w-[1440px] mx-auto bg-white md:mt-10 z-0'>
            <div className='flex flex-col lg:flex lg:flex-row  gap-8 w-full  '>
              <div className='mx-10 lg:mx-0 lg:ml-12  lg:w-[50%]'>
                <img className='rounded-xl  w-auto h-auto lg:w-full lg:h-[380px] bg-cover' src={ImageOne}/>
              </div>
              <div className='flex flex-col justify-between lg:w-[50%] '>
                <div className='flex- flex-col'>
                 <div className='w-full flex md:ml-8 lg:ml-0  md:flex md:justify-normal md:w-auto '>
                 <p className='rounded-full text-sm py-1 font-medium text-[#60dba9] border-2 border-[#60dba9] w-1/4 whitespace-nowrap  mx-10 md:mx-0  xl:w-[15%] text-center'>
                        Latest Post
                  </p>
                 </div>
                  <p className='text-black text-xl lg:text-4xl font-semibold mx-10 lg:mx-0 lg:w-4/5 mt-4'>A Practicle Guide To Apple Search Ads</p>
                  <p className='text-[#3c3e3f] mx-10 lg:mx-0 text-sm lg:text-[16px] mt-2'>Why it's a channel worth exploring to grow your app</p>
                </div>
                <div className='flex items-center space-x-2 mx-10 lg:mx-0 mt-10'>
                    <div className=''>
                      <img className='h-10 w-10  rounded-full' src={User} />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-black font-bold text-sm'>Thomas Petit</p>
                      <p className='text-[#3c3e3f] text-sm'>June 07,2024</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Header