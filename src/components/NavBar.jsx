import React from 'react'

function NavBar() {
  return (
    <div className=' w-full flex justify-around p-6 '>
        <div className='flex items-center'>
            {/* LOGO GOES HERE */}
            <p>Calendly</p>
        </div>
        <div className='flex gap-4 items-center'>
            {
                ["Individuals", "Teams", "Enterprise", "Product", "Pricing", "Resources"].map((item)=>(
                    <div className='text-sm font-semibold'>{item}</div>
                ))
            }
        </div>
        <div className='flex gap-4 items-center'>
            <p className='text-sm font-semibold'>Log In</p>
            <p className='p-2 text-sm bg-blue-600 rounded-lg'>Get Started</p>
        </div>
    </div>
  )
}

export default NavBar