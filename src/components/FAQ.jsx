import React from 'react'

function FAQ() {
  return (
    <div className='p-10 flex  justify-around '>
        <div className='w-[40%] pl-20'>
            <h1 className='text-6xl'>Frequently</h1>
            <h1 className='text-6xl'> Asked </h1>
            <h1 className='text-6xl'>Questions</h1>
        </div>
        <div className='flex flex-col gap-4 w-[60%]'>
            {
                [
                    "What happens at the end of my trial?", "Can we try Calendly with multiple users?", "What does the renewal process look like?", "How do i upgrade or downgrade?", "We're a non-profit organization, is there special pricing available?", "What payment method do you accept?"
                ].map((ques)=>(
                    <div className=' border-2 rounded-md p-4'>
                         <p className='text-3xl font-semibold text-[#232952]'>{ques}</p> {/* plus icon here*/}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQ