import React from 'react'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Company from '../../assets/comapny.jpg'
import Growth from '../../assets/growth.jpg'
import Engineering from '../../assets/engineering.jpg'
import Computers from '../../assets/computers.jpg'
import Google from '../../assets/google.jpg'
import Gaming from '../../assets/gaming.jpg'
import User from '../../assets/p1.jpg'

const Articles = () => {
  return (
    <>
        <div className='bg-white max-w-[1440px]  mx-auto mt-10'>
                <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row justify-between items-center lg:mx-10'>
                    <ul className='flex items-center space-x-6 md:space-x-16 lg:space-x-8 text-black text-sm lg:text-[16px] font-medium'>
                        <li className='bg-[#f3ea71] whitespace-nowrap flex items-center justify-center rounded-full h-12 w-24'><a href="/">All articles</a></li>
                        <li><a href="/">Comapny</a></li>
                        <li><a href="/">Engineering</a></li>
                        <li><a href="/">Growth</a></li>
                    </ul>
                    
                        <ul className='text-black flex items-center space-x-8 lg:space-x-4'>
                            <li className='text-[#84888a]'>Follow for updates:</li>
                            <li><FontAwesomeIcon className='text-[#73818e]' icon={faTwitter} /></li>
                            <li><FontAwesomeIcon className='text-[#73818e]' icon={faWifi} /></li>
                        </ul>
                   
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 mx-5 md:mx-8 lg:mx-10'>
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
                        <div className='flex flex-col md:space-y-20 lg:space-y-[58px] xl:space-y-8 justify-between'>
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
                    <div className=' border border-[#d3dbd8]  rounded-xl'>
                        <div className='flex flex-col md:space-y-[85px] lg:space-y-[58px] xl:space-y-8 justify-between'>
                            <div>
                                <div className=''>
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' src={Computers} />
                                </div>
                                <div className='w-1/2 sm:w-[40%] lg:w-1/2 xl:w-1/3 mt-2 px-4'>
                                <p className='rounded-full text-sm py-1 font-medium text-[#e26160] border-2 border-[#e26160] text-center'>Company</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-lg font-semibold text-black w-4/5'>How We Work Remotedly At RevenueCat</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-[16px] w-[90%]'>We are a little different than your average 9-5 job</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2 py-4  px-4'>
                                <div className=''>
                                    <img className='h-10 w-10 object-cover rounded-full' src={User} />
                                </div>
                                <div className='flex flex-col'>
                                <p className='text-black font-bold text-sm'>Rachel Wright</p>
                                <p className='text-[#3c3e3f] text-sm'>June 07,2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' border border-[#d3dbd8]  rounded-xl'>
                        <div className='flex flex-col space-y-16 justify-between'>
                            <div>
                                <div className=''>
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' src={Google} />
                                </div>
                                <div className='w-1/2 sm:w-[40%] lg:w-1/2 xl:w-1/3 mt-2 px-4'>
                                <p className='rounded-full text-sm py-1 font-medium text-[#596ccb] border-2 border-[#596ccb] text-center'>Engineering</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-lg font-semibold text-black'>Google I/O 2022 Announcements</p>
                                </div>
                                <div className='px-4 mt-2'>
                                    <p className='text-[16px] w-[90%]'>How the new features and upadted Play Console will help grow your app business</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2 py-4  px-4'>
                                <div className=''>
                                    <img className='h-10 w-10 object-cover rounded-full' src={User} />
                                </div>
                                <div className='flex flex-col'>
                                <p className='text-black font-bold text-sm'>Thomas Petit</p>
                                <p className='text-[#3c3e3f] text-sm'>June 07,2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' border border-[#d3dbd8] bg-black  rounded-xl pb-4'>
                        <div className='flex flex-col md:space-y-[88px] lg:space-y-[74px] justify-between'>
                            <div>
                                <div className=''>
                                    <img className='object-cover rounded-t-xl w-full h-[350px]' src={Gaming} />
                                </div>
                               
                                <div className='px-4 mt-2'>
                                    <p className='text-3xl font-semibold text-white'>The Sub Club Podcast</p>
                                </div>
                                <div className='px-4 mt-4'>
                                    <p className='text-[16px] w-[80%] text-white'>Interviews and deep dives with the experts behind the biggest apps in the world.</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center w-1/2 md:w-[55%] xl:w-[35%] rounded-full space-x-2 py-2 mx-4   bg-[#f3ea71]'>
                                <div className='rounded-full w-8 h-8 bg-black flex items-center justify-center '>
                                    <FontAwesomeIcon className='text-white ' icon={faPlay} />
                                </div>
                                <p className='text-sm text-black text-medium'>LISTEN NOW</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 mx-5 md:mx-10'>
                   
                   
                </div> */}

                
        </div>
    </>
  )
}

export default Articles