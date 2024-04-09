import React from 'react'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <>
        <div className='bg-white max-w-[1440px] py-16  mx-auto mt-10'>
            <div className='flex flex-col lg:flex lg:flex-row justify-between mx-10 xl:mx-32 items-center'>
                <div className='flex space-x-8 items-center lg:flex lg:flex-col lg:space-y-20 lg:items-start'>
       
                   <div className='lg:ml-3'>
                    <img src={Logo} alt="" className='w-44 h-auto'   />
                   </div>
                
                    <div className='flex flex-col  space-y-4'>
                        <div className='flex items-center space-x-4'>
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faSquareTwitter} />
                        </div>
                        <p>&#169; 2024 RevenueCat</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-8 md:mt-0 md:grid-cols-4 gap-10 md:gap-16 lg:gap-2'>
                    <div>
                        <ul className='flex flex-col space-y-4 text-black text-xs md:text-sm'>
                            <li className='font-semibold'>Resources</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Customers</li>
                            <li>Help Centers</li>
                            <li>Podcast</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col space-y-4 text-black text-xs md:text-sm'>
                            <li className='font-semibold'>Documentation</li>
                            <li>Quickstart Guide</li>
                            <li>System Status</li>
                            <li>SDKs</li>
                            <li>API Reference</li>
                            <li>Sample Apps</li>
                            <li>Migration Guides</li>
                            <li>View All Docs</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col space-y-4 text-black text-xs md:text-sm'>
                            <li className='font-semibold'>Product</li>
                            <li>Why RevenueCat?</li>
                            <li>Integrations</li>
                            <li>For Engineering Teams</li>
                            <li>For Marketing Teams</li>
                            <li>For Product Teams</li>
                            <li>Apple Receipt Checker</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div> 
                        <ul className='flex flex-col space-y-4 text-black text-xs md:text-sm '>
                            <li className='font-semibold'>Legal</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>GDPR</li>
                            <li>Fair Bill Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer