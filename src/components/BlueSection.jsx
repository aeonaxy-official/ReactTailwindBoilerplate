import React from 'react'

function BlueSection() {
  return (
    <div className='flex flex-col items-center gap-4 py-20 my-10 bg-[url("https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <h1 className='text-6xl font-semibold text-white'>Easy access for easy bookings</h1>
        <p className='text-xl text-white'>Share your Calendly link right from your browser, so you can schedule meetings without the back and forth</p>
        <div className='flex gap-2'>
            <button className='bg-blue-600 text-white p-4 rounded-md '>Start for free</button>
            <button className='border-2 border-white text-white p-4 rounded-md'>Talk with sales</button>
        </div>
    </div>
  )
}

export default BlueSection