import React from 'react'

const Newsletter = () => {
  return (
    <>
        <div className='bg-gray-200 max-w-[1440px]  mx-auto mt-10 py-8'>
                <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row justify-center items-center lg:space-x-16  mx-auto   '>
                    <div className='text-center '>
                        <p className='text-xl  lg:text-2xl xl:text-3xl text-black font-bold  mx-5 lg:mx-0'>Subscribe to our monthly newsletter</p>
                    </div>
                    <div className='bg-white shadow-xl flex justify-between  lg:gap-28 xl:gap-32 rounded-full  py-2'>
                        <input className='pl-4 ml-5 text-black outline-none ' type="text" placeholder='Your email address...' />
                        <button className='bg-[#566cdb] text-white font-medium text-sm rounded-full px-4 py-2 mr-4'>Subscribe</button>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Newsletter