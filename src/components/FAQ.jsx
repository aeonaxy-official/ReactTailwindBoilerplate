import React from 'react'
import { MdExpandMore } from "react-icons/md";

function FAQ() {
  return (
    <div className='lg:p-10 p-2 lg:flex  justify-around '>
        <div className='w-[40%] lg:pl-20 p-2'>
            <h1 className='text-6xl'>Frequently</h1>
            <h1 className='text-6xl'> Asked </h1>
            <h1 className='text-6xl'>Questions</h1>
        </div>
        <div className=' p-2 flex flex-col gap-4 lg:w-[60%]'>
            {
                [
                    "What happens at the end of my trial?", "Can we try Calendly with multiple users?", "What does the renewal process look like?", "How do i upgrade or downgrade?", "We're a non-profit organization, is there special pricing available?", "What payment method do you accept?"
                ].map((ques)=>(
                    <div key={ques} className='flex justify-between border-2 rounded-md p-4'>
                         <p className='text-3xl font-semibold text-[#232952]'>{ques}</p> {/* plus icon here*/} <MdExpandMore size={30} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQ