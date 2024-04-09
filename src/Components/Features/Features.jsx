import React from 'react'
import Company from '../../assets/comapny.jpg'
import Growth from '../../assets/growth.jpg'
import Engineering from '../../assets/engineering.jpg'
import User from '../../assets/p1.jpg'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  return (
    <>
        <div className='bg-white max-w-[1440px]  mx-auto mt-10 pb-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10 mx-5 md:mx-8 lg:mx-10'>
                    <div className=' border border-[#d3dbd8]  rounded-xl'>
                        <div className='flex flex-col space-y-8 justify-between'>
                            <div>
                                <div className=''>
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' alt="" src={Company} />
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
                                    <img className='h-10 w-10 object-cover rounded-full' alt="" src={User} />
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
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' alt="" src={Growth} />
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
                                    <img className='h-10 w-10 object-cover  rounded-full' alt="" src={User} />
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
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' alt="" src={Engineering} />
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
                                    <img className='h-10 w-10 object-cover rounded-full' alt="" src={User} />
                                </div>
                                <div className='flex flex-col'>
                                <p className='text-black font-bold text-sm'>Corey Rabazinski</p>
                                <p className='text-[#3c3e3f] text-sm'>June 07,2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

                <div className='mx-auto hidden md:flex items-center justify-between mt-10 font-semibold'>
                        <div className='flex md:ml-60 lg:ml-96 xl:ml-[600px] space-x-14 items-center justify-center text-black'>
                            <p className='rounded-full flex items-center justify-center text-center bg-[#f1eb72] w-8 h-8'>1</p>
                            <p>2</p>
                            <p>...</p>
                            <p>8</p>
                        </div>
                        <div className='flex mr-24  justify-end'>
                        <div className='flex space-x-4 items-center  text-black'>
                            <p>Next</p>
                            <FontAwesomeIcon className='text-[#f06362]' icon={faArrowRight} />
                        </div>
                        </div>
                </div>

                <div className='mx-auto space-x-4 flex md:hidden items-center justify-center mt-10 font-semibold'>
                    <div className='flex space-x-2 items-center justify-center'>
                        <FontAwesomeIcon className='text-[#f06362]' icon={faArrowLeft} />
                        <p>Previous</p>
                    </div>
                    <div className='flex space-x-2 items-center justify-center'>
                        <p>Next</p>
                        <FontAwesomeIcon className='text-[#f06362]' icon={faArrowRight} />
                    </div>
                </div>
        </div>
    </>
  )
}

export default Features