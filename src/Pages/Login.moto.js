import React, { useState } from 'react';
import img1 from "../assets/profile1.png";
import img2 from "../assets/profile2.png";
import img3 from "../assets/profile3.png";
import { useNavigate } from "react-router-dom"
import Dribble from '../assets/dribble';


const Moto = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate()
  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <nav className='flex gap-3 p-4'>
        <h3 className='text-xl italic text-red-500 hidden lg:block'>
          <Dribble />
        </h3>
        <div onClick={()=>navigate("/profile")} className='bg-gray-100 p-3 ml-4 hover:bg-gray-200 rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 ' viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
        </div>

        {/* Add icon here */}
      </nav>
      <div className='p-2 flex items-center justify-center flex-col lg:flex-col'>
        <h1 className='lg:text-4xl font-bold '>What brings you on Dribble ?</h1>
        <p className='text-gray-500 mt-4'>Select the options that best describe you. Don't worry, you can explore other options later.</p>
      </div>
      <div className='flex lg:flex-row flex-col mt-8 p-2 lg:mt-[4rem] gap-4 justify-center items-center'>
        <div className={`relative border p-3 w-full lg:w-[25%] rounded-lg  y-12 ${selectedOptions.includes('option1') ? 'border-pink-500' : 'border-gray-300'}`}>
          <img className='h-full w-full' src={img1} alt="" />
          <h4 className='font-bold text-xl text-center'>I'm a designer looking to hire designer </h4>
          <p className={selectedOptions.includes('option1') ? 'block text-center' : 'hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt voluptatibus fuga, culpa iste vero.</p>
          <div className="flex items-center justify-center mt-4">
            <input type="radio" className='h-6 w-6 border border-pink-500' id="option1" checked={selectedOptions.includes('option1')} onChange={() => toggleOption('option1')} />
          </div>
        </div>
        <div className={`relative border p-3 w-full lg:w-[25%] rounded-lg  y-12 ${selectedOptions.includes('option2') ? 'border-pink-500' : 'border-gray-300'}`}>
          <img className='h-full w-full' src={img2} alt="" />
          <h4 className='font-bold text-xl text-center'>I'm a designer looking to hire designer </h4>
          <p className={selectedOptions.includes('option2') ? 'block text-center' : 'hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt voluptatibus fuga, culpa iste vero.</p>
          <div className="flex items-center justify-center mt-4">
            <input type="radio" className='h-6 w-6 border border-pink-500' id="option2" checked={selectedOptions.includes('option2')} onChange={() => toggleOption('option2')} />
          </div>
        </div>
        <div className={`relative border p-2 w-full lg:w-[25%] rounded-lg y-12 ${selectedOptions.includes('option3') ? 'border-pink-500' : 'border-gray-300'}`}>
          <img className='h-full w-full' src={img3} alt="" />
          <h4 className='font-bold text-xl text-center'>I'm a designer looking for design inspiration </h4>
          <p className={selectedOptions.includes('option3') ? 'block text-center' : 'hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt voluptatibus fuga, culpa iste vero.</p>
          <div className="flex items-center justify-center mt-4">
            <input type="radio" className='h-6 w-6 rounded-3xl border border-gray-200' id="option3" checked={selectedOptions.includes('option3')} onChange={() => toggleOption('option3')} />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center mt-2 justify-center'>
        <p>Anything else? You can select multiple.</p>
        <button className='bg-pink-500 text-white px-4 py-2 w-36 rounded-md' onClick={() => navigate("/email-verify")}>Finish</button>
        <p className='text-gray-400'>or Press RETURN</p>
      </div>
    </div>
  );
};

export default Moto;
