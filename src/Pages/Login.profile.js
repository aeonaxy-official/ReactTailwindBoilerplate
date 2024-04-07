import React, { useState } from 'react'
import logo from "../assets/add-img.png"
import arrow from "../assets/forwrad arrow.png"
import { useNavigate } from 'react-router-dom';
import Dribble from '../assets/dribble';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpdatePicture = () => {
    console.log("Successfully updated ");
  }


  return (
    <div className='h-screen w-full py-4'>
      {/* nav */}
      <nav className='p-4'>
        <p className='text-pink-500 text-xl italic' onClick={()=> navigate("/")}>
          <Dribble/>
        </p>
      </nav>
      <div className='w-full flex flex-col px-2 lg:px-72' >
        <h1 className='text-4xl mt-8 py-4 font-bold'>Welcome! Let's create your profile</h1>
        <p className='text-md'>Let others get to know you better! You can do these later </p>
        <div className='mt-12'>
          <h3 className='text-xl font-bold'>Add an avatar </h3>
          <div className='mt-4'>
            <div className='flex items-center flex-col lg:flex-row gap-6'>
              <div className={profilePicture ? 'w-32 h-32 lg:w-40 lg:h-40 border-4  flex items-center justify-center rounded-full' : 'w-32 h-32 lg:w-40 lg:h-40 border-4 border-dotted border-gray-400  flex items-center justify-center rounded-full'}>
                {
                  profilePicture ? (
                    <img src={profilePicture} alt="Profile" className='w-full h-full border-none rounded-full cover-fill' />
                  )
                    :
                    <img src={logo} className='w-6 h-6 rounded-full' alt="" onClick={handleUpdatePicture} />
                }
              </div>
              <div>
                <label htmlFor="profilePictureInput" className="border border-gray-300  p-2 custom-file-upload">
                  Choose image
                  <input
                    id="profilePictureInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePictureUpload}
                  />
                </label>
                <p className='text-gray-400 mt-4 flex item-center'> <span><img className='w-5 h-5 mt-1' src={arrow} alt="" /></span> Or choose one of our default</p>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <h3 className='text-xl mt-2 font-bold'>Add your location</h3>
            <input type="text" placeholder='Enter location' className='bg-transparent focus:outline-none w-full p-2 border-b border-gray-300' />
          </div>
          <button className='px-8 py-2 text-white bg-pink-400 mt-12 w-44 mb-4 hover:bg-pink-500 rounded-md' onClick={() => navigate("/moto")}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Profile