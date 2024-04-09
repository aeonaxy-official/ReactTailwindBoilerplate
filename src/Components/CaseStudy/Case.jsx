import React from 'react'
import User from '../../assets/p1.jpg'
const Case = () => {
  return (
   <>
        <div className='bg-[#161a1d] max-w-[1440px] py-16 mx-auto mt-10'>
            <div className='w-full flex flex-col space-y-16 lg:space-y-0 lg:flex lg:flex-row  lg:justify-evenly items-center'>
                <div className='flex flex-col space-y-8 lg:mx-10 xl:mx-0'>
                    <p className='text-2xl md:text-5xl text-white font-bold'>Ready to get started?</p>
                    <div className='flex space-x-4 items-center'>
                       <button className='text-xs text-white text-center py-3 px-6 bg-[#566cdb] rounded-full'>SIGN UP FOR FREE</button>
                       <p className='text-white underline text-xs decoration-2 decoration-red-500 underline-offset-4'>TALK TO SALES</p>
                    </div>
                </div>
                <div className='border border-gray-700 rounded-3xl lg:mx-10 xl:mx-0 w-[70%] lg:w-auto px-6 py-8 '>
                    <div className='flex flex-col space-y-6'>
                        <p className='text-white text-xl w-4/5'>"At any level og Scale RevenueCat just works"</p>
                        <div className='flex items-center space-x-4'>
                            <div className=''>
                                <img className='h-10 w-10 object-cover rounded-full' alt="" src={User} />
                            </div>
                            <p className='text-sm text-white'>David Smith, Widgetsmith</p>
                        </div>
                        <p className='text-white text-xs underline decoration-2 decoration-red-500 underline-offset-4'>READ CASE STUDY</p>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Case