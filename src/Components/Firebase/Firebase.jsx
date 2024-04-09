import React from 'react'
import ImageOne from '../../assets/img1.jpg'
import User from '../../assets/p1.jpg'
import Company from '../../assets/comapny.jpg'
import Growth from '../../assets/growth.jpg'
import Engineering from '../../assets/engineering.jpg'

const Firebase = () => {
  return (
    <>
        <div className='bg-white max-w-[1440px]  mx-auto mt-10'>
            <div className='flex flex-col lg:flex lg:flex-row  gap-8 w-full  '>
              <div className='mx-8 xl:mx-10 lg:mx-0 lg:ml-12  lg:w-[50%]'>
                <img className='rounded-xl  w-auto h-auto lg:w-full lg:h-[380px] object-cover' src={ImageOne}/>
              </div>
              <div className='flex flex-col justify-between lg:w-[50%] '>
                <div className='flex- flex-col'>
                 <div className='w-full flex md:ml-8 lg:ml-0  md:flex md:justify-normal md:w-auto '>
                 <p className='rounded-full text-sm py-1 font-medium text-[#596ccb] border-2 border-[#596ccb] w-1/4 whitespace-nowrap mx-10 md:mx-0 xl:w-[15%] text-center'>
                        Engineering
                  </p>
                 </div>
                  <p className='text-black text-xl lg:text-4xl font-semibold mx-8 lg:mx-0 lg:w-4/5 mt-4'>A Practicle Guide To Apple Search Ads</p>
                  <p className='text-[#3c3e3f] mx-8 lg:mx-0 text-sm lg:text-[16px] mt-2'>Why it's a channel worth exploring to grow your app</p>
                </div>
                <div className='flex items-center space-x-2 mx-8 lg:mx-0 mt-10'>
                    <div className=''>
                      <img className='h-10 w-10  rounded-full' src={User} />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-black font-bold text-sm'>Francie Fernandes</p>
                      <p className='text-[#3c3e3f] text-sm'>June 07,2024</p>
                    </div>
                </div>
              </div>
            </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10 mx-5 md:mx-8 lg:mx-10'>
                    <div className=' border border-[#d3dbd8]  rounded-xl'>
                        <div className='flex flex-col space-y-8 justify-between'>
                            <div>
                                <div className=''>
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' src={Company} />
                                </div>
                                <div className='w-1/2 sm:w-[40%] lg:w-1/2 xl:w-1/3 mt-2 px-4'>
                                    <p className='rounded-full text-sm py-1 font-medium text-[#e26160] border-2 border-[#e26160] text-center'>Company</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-lg font-semibold text-black'>Here at RevenueCat Employees are Customers Too</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-[16px] w-[90%]'>Sharing app building ideas in our Employees App Club</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2 py-4  px-4'>
                                <div className=''>
                                    <img className='h-10 w-10 object-cover rounded-full' src={User} />
                                </div>
                                <div className='flex flex-col'>
                                <p className='text-black font-bold text-sm'>Will Taylor</p>
                                <p className='text-[#3c3e3f] text-sm'>June 07,2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' border border-[#d3dbd8]  rounded-xl'>
                        <div className='flex flex-col md:space-y-8 lg:space-y-[58px] xl:space-y-8 justify-between'>
                            <div>
                                <div className=''>
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' src={Growth} />
                                </div>
                                <div className='w-1/2 sm:w-[40%] lg:w-1/2 xl:w-1/3 mt-2 px-4'>
                                    <p className='rounded-full text-sm py-1 font-medium text-[#60dba9] border-2 border-[#60dba9] text-center'>Growth</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-lg font-semibold text-black'>App Store Optimiztion Guide For Subscription Apps</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-[16px] w-[90%]'>Learn how to boost your app's visibility and more</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2 py-4  px-4'>
                                <div className=''>
                                    <img className='h-10 w-10 object-cover  rounded-full' src={User} />
                                </div>
                                <div className='flex flex-col'>
                                <p className='text-black font-bold text-sm'>Thomas Kreibernegg</p>
                                <p className='text-[#3c3e3f] text-sm'>June 07,2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' border border-[#d3dbd8]  rounded-xl'>
                        <div className='flex flex-col lg:space-y-[58px] xl:space-y-8 justify-between'>
                            <div>
                                <div className=''>
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' src={Engineering} />
                                </div>
                                <div className='w-1/2 sm:w-[40%] lg:w-1/2 xl:w-1/3 mt-2 px-4'>
                                    <p className='rounded-full text-sm py-1 font-medium text-[#596ccb] border-2 border-[#596ccb] text-center'>Engineering</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-lg font-semibold text-black w-4/5'>Account deletion rules on the App Store</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-[16px] w-[90%]'>Everything you need to know about the new rule</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2 py-4  px-4'>
                                <div className=''>
                                    <img className='h-10 w-10 object-cover rounded-full' src={User} />
                                </div>
                                <div className='flex flex-col'>
                                <p className='text-black font-bold text-sm'>Corey Rabazinski</p>
                                <p className='text-[#3c3e3f] text-sm'>June 07,2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
        </div>
    </>
  )
}

export default Firebase