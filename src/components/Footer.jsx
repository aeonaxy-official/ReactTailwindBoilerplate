import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    
    <div className="lg:px-10 px-4">
      <div className='lg:flex gap-8 justify-around my-16 lg:mx-16'>
      {/* Download & Socials */}
        <div className='flex flex-col  gap-10 w-[full] lg:w-[30vw]'>
          <h1 className='text-3xl font-bold'>Easy <br /> <span className='text-blue-600'>ahead</span></h1>
          <p className='text-xl '>We take the work out of connection with others so you can accomplish more.</p>
          <select name="" id=" " className='px-6 py-4 border-2 border-black rounded-md'>
            <option value="English" >English</option>
            <option value="Hindi" >Hindi</option>
            <option value="Esponal" >Esponal</option>
          </select>
          <div className="lg:flex gap-10">
            {/* { Google play icon } */}
            {/* { Apple Store icon } */}
            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" className="w-36"/>
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="" className="w-34"/>
            
          </div>
          <div className="flex gap-6">
            {/* Other social icons */}
            <FaTwitter size={30}/>
            <FaFacebookF size={30} />
            <FaInstagram size={30} />
            <FaLinkedinIn size={30} />
            <FiYoutube size={30} />
            
            
          </div>
        </div>
        {/* Section 1 */}
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-3xl font-semibold text-[#323679]'>About</h1>
            <p className='text-xl font-light'>About Calendly </p>
            <p className='text-xl font-light'>Contact Us </p>
            <p className='text-xl font-light'>Newsroom</p>
            <p className='text-xl font-light'> Careers</p>
            <p className='text-xl font-light'> Security</p>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='text-3xl font-semibold text-[#323679]'>Support</h1>
            <p className='text-xl font-light'>Help Center</p>
            <p className='text-xl font-light'>Video Tutorials</p>
          </div>
        </div>
        {/* Section 2 */}
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-3xl font-semibold text-[#323679]'>Solutions</h1>
            <p className='text-xl font-light'>Sales</p>
            <p className='text-xl font-light'>Customer Success</p>
            <p className='text-xl font-light'>Recruiting</p>
            <p className='text-xl font-light'>Information Technology</p>
            <p className='text-xl font-light'>Marketing</p>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='text-3xl font-semibold text-[#323679]'>Add-Ons</h1>
            <p className='text-xl font-light'>Download for Chrome</p>
            <p className='text-xl font-light'>Download for Firefox</p>
          </div>
        </div>
        {/* Section 3 */}
        <div className='flex flex-col gap-8'>
          <div  className='flex flex-col gap-8'>
            <h1  className='text-3xl font-semibold text-[#323679]'>Popular Features</h1>
            <p className='text-xl font-light'>Embed Calendly</p>
            <p className='text-xl font-light'>Availability</p>
            <p className='text-xl font-light'>Sending Notifications</p>
            <p className='text-xl font-light'>Using Calendly Mobile</p>

          </div>
          <div  className='flex flex-col gap-8'>
            <h1 className='text-3xl font-semibold text-[#323679]'>Developers</h1>
            <p className='text-xl font-light'>Developer Tools</p>
          </div>
          
        </div>
          
    </div>
      <div className="h-full w-full flex mb-10 justify-between">
          <p className='text-zinc-800/50'>Copyright Calendly 2022</p>
            <p className="text-zinc-800/50 ">Privacy / Terms & Conditions </p>
          </div>
    </div>
  )
}

export default Footer