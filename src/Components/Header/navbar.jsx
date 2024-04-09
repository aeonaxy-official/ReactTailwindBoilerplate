import {React, useState} from 'react'
import Logo from '../../assets/logo.png'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {


  const [openMenu, SetOpenMenu] = useState(false)


  const menuClick = () => {
      SetOpenMenu(!openMenu)
  }


  return (
   <>
     <div className='max-w-[1440px] hidden lg:flex justify-center items-center mx-auto bg-white '>
            <div className='w-full flex justify-evenly items-center lg:space-x-20 xl:space-x-52'>
                <div>
                    <img src={Logo} className='w-24 h-auto' alt=""  />
                </div>
                <ul className='flex items-center lg:gap-8 xl:gap-16'>
                    <li className='flex items-center lg:space-x-2 xl:space-x-3'>
                      <a href="/">Products</a>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </li>
                    <li className='flex items-center space-x-3'>
                      <a href="/">Docs</a>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </li>
                    <li><a href="/">Customer</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <div className='flex lg:gap-5 xl:gap-8 items-center' >
                    <button className='text-sm font-bold text-black underline decoration-2 decoration-red-500 underline-offset-4'>LOGIN</button>
                    <button className='bg-[#566cdb] text-sm font-bold text-white rounded-full py-2 px-5'>SIGN UP</button>
                </div>

            </div>
    </div>

    


    <div>
        <div className='flex justify-between items-center lg:hidden  relative '>
                {openMenu === false?<div className="">
                    <img onClick={menuClick} className='w-28 ' alt="" src={Logo}/>
                   
                </div>: null}

            {openMenu ?<div className='flex flex-col bg-white space-y-3  inset-0 bottom-0 z-40 fixed top-0 text-sm '>

                    <div className=" ">
                    
                    <img onClick={menuClick} className='w-28 ' alt="" src={Logo}/>
                    </div>
           
                    <ul className=' flex flex-col space-y-4  text-lg text-black mt-8 pl-3'>
                        
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Docs</a></li>
                    <li><a href="/">Customer</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Blog</a></li>
                        
                    </ul>
            </div>:null }
      </div>
      </div>
   </>
  )
}

export default Navbar 