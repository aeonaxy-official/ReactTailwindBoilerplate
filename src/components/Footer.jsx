import React from 'react'

function Footer() {
  return (
    <div className='flex gap-4'>
      {/* Download & Socials */}
        <div className='flex flex-col gap-8'>
          <h1>Easy ahead</h1>
          <p>We take the work out of connection with others so you can accomplish more.</p>
          <select name="" id="">
            <option value="English" >English</option>
            <option value="Hindi" >Hindi</option>
            <option value="Esponal" >Esponal</option>
          </select>
          <div>
            {/* { Google play icon } */}
            {/* { Apple Store icon } */}
            
          </div>
          <div>
            {/* Other social icons */}
          </div>
          <p>Copyright Calendly 2022</p>
        </div>
        {/* Section 1 */}
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-5xl font-semibold text-[#323679]'>About</h1>
            <p className='text-xl font-light'>About Calendly </p>
            <p className='text-xl font-light'>Contact Us </p>
            <p className='text-xl font-light'>Newsroom</p>
            <p className='text-xl font-light'> Careers</p>
            <p className='text-xl font-light'> Security</p>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='text-5xl font-semibold text-[#323679]'>Support</h1>
            <p className='text-xl font-light'>Help Center</p>
            <p className='text-xl font-light'>Video Tutorials</p>
          </div>
        </div>
        {/* Section 2 */}
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-5xl font-semibold text-[#323679]'>Solutions</h1>
            <p className='text-xl font-light'>Sales</p>
            <p className='text-xl font-light'>Customer Success</p>
            <p className='text-xl font-light'>Recruiting</p>
            <p className='text-xl font-light'>Information Technology</p>
            <p className='text-xl font-light'>Marketing</p>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='text-5xl font-semibold text-[#323679]'>Add-Ons</h1>
            <p className='text-xl font-light'>Download for Chrome</p>
            <p className='text-xl font-light'>Download for Firefox</p>
          </div>
        </div>
        {/* Section 3 */}
        <div className='flex flex-col gap-8'>
          <div>
            <h1>Popular Features</h1>
            <p>Embed Calendly</p>
            <p>Availability</p>
            <p>Sending Notifications</p>
            <p>Using Calendly Mobile</p>

          </div>
          <div>
            <h1>Developers</h1>
            <p>Developer Tools</p>
          </div>
        </div>
        <p>Privacy/ Terms and Conditions</p>
    </div>
  )
}

export default Footer