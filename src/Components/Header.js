import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Dribble from '../assets/dribble';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="flex justify-between p-2 border-b border-gray-200">
      <div className="flex items-center">
        <h3 onClick={() => navigate("/")} className='px-4'>
          <Dribble />
        </h3>
        <ul className={`flex gap-6 ${showMenu ? 'hidden' : 'block'}`}>
          <li className="p-2 hidden lg:block ">Inspiration</li>
          <li className="p-2  hidden lg:block ">Find Work</li>
          <li className="p-2 hidden lg:block ">Learn Design</li>
          <li className="p-2 hidden lg:block ">Go Pro</li>
          <li className="p-2 hidden lg:block ">Hire Designers</li>
        </ul>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">

        <form className="max-w-md mx-auto">
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-2 ps-10 border border-gray-300 rounded-lg bg-gray-200  " placeholder="Search" required />
          </div>
        </form>

        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag-x ${showMenu ? 'hidden' : 'block'}`}>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13 21h-4.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.506 3.287" />
          <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
          <path d="M22 22l-5 -5" />
          <path d="M17 22l5 -5" />
        </svg>
        <img src={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} className="w-10 h-10 rounded-full " alt="" />
        <button className="bg-pink-400 hover:bg-pink-500 text-white p-2 px-4 rounded-md hidden md:block">Upload</button>
        <div className="md:hidden">
          <svg onClick={() => setShowMenu(!showMenu)} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 cursor-pointer ${showMenu ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
      {
        showMenu && (
          <ul className="md:hidden flex flex-col absolute top-0 left-0 w-full bg-black p-4 text-white border border-gray-300 rounded-b-lg shadow-md">
            <Link to={"#"} onClick={() => setShowMenu(false)} className="p-2 hover:bg-slate-600 hover:rounded-md">Inspiration</Link>
            <Link to={"#"} onClick={() => setShowMenu(false)} className="p-2 hover:bg-slate-600 hover:rounded-md">Find Work</Link>
            <Link to={"#"} onClick={() => setShowMenu(false)} className="p-2 hover:bg-slate-600 hover:rounded-md">Learn Design</Link>
            <Link to={"#"} onClick={() => setShowMenu(false)} className="p-2 hover:bg-slate-600 hover:rounded-md">Go Pro</Link>
            <Link to={"#"} onClick={() => setShowMenu(false)} className="p-2 hover:bg-slate-600 hover:rounded-md">Hire Designers</Link>
          </ul>
        )
      }
    </div>
  )
}

export default Header;
