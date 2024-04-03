import React, { useState,useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faSun, faMoon, faGraduationCap, faLock, faBook, faUserPlus, faArchive, faCircleHalfStroke,faBars, faDownload, faQuestion } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo.png";
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faClock, faComments } from '@fortawesome/free-regular-svg-icons';
import Dropdown from './Dropdown';
import ListItem from './ListItem';

const SideBar = ({ pageContent: PageContentComponent, darkmode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Update body class when darkMode changes
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sidebarClass = `fixed top-0 left-0 z-40 w-65 sm:w-70 h-screen transition-transform ${
    sidebarOpen ? '-translate-x-0' : '-translate-x-full'
  } sm:translate-x-0 ${darkMode ? 'dark:bg-gray-800' : 'bg-gray-50'}`;

  const pageContentClass = `p-4 sm:ml-64 pl-10 ${
    darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
  }`;

  return (
    <div>
      <div>
      <div className={`${darkMode?'bg-gray-900':'bg-white'}`}>
      <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className={`inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg ${
            darkMode
              ? 'text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-gray-600'
              : 'text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-200'
          }`}
          onClick={toggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
      </div>


      <aside
        id="default-sidebar"
        className={sidebarClass}
        aria-label="Sidebar"
      >
        {/* Close button at the top of sidebar */}
        {isMobile && (
          <button
            className="absolute top-0 right-0 m-1 text-gray-500 hover:text-gray-900 focus:outline-none bg-red"
            onClick={closeSidebar}
          >
            <span className="sr-only ">Close sidebar</span>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
{/* Sidebar content */}
<div className="h-full px-3 py-4 overflow-y-auto">
  <ul className="space-y-2 font-medium">
    <li className='pt-5 flex'>
      <a href="/dashboard" className={`flex items-center p-2 rounded-lg group ${darkMode ? 'text-white ' : 'text-black'}`}>
        <img src={logo} alt="Logo" className="w-10 h-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        <span className="ms-3">refero team</span>
      </a>
      <a className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} href='/notifications'>
      <button>
      <FontAwesomeIcon icon={faBell} className='pl-10'/>
      </button>
      </a>
    </li>
    <li>
      <form className="max-w-md mx-auto">   
          <label htmlFor="default-search" className={`mb-2 text-sm font-medium sr-only ${darkMode ? 'text-white' : 'text-black'}`}>Search</label>
          <div className="relative">
             <input type="search" id="default-search" className={`block w-full p-3 pr-16 ps-2 text-xs border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-gray-500 ${darkMode ? 'text-white bg-gray-700 dark:bg-gray-700' : 'text-black bg-gray-50 dark:bg-gray-100'}`} placeholder="Ask your AI assistant" required />
              <button type="submit" className={`absolute end-2.5 bottom-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 ${darkMode ? 'text-white dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800' : 'text-white dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'}`}><FontAwesomeIcon icon={faSearch} /></button>
          </div>
      </form>
    </li>
    <li className='pt-2 text-left pb-3'>
      <a href='/pricing'>
      <div className={`h-auto w-full p-2  text-sm rounded-md m4 p-1.5 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
        <h1 className='text-sm'>Your team used 8/50 docs.</h1>
        <p className='text-2xs text-gray-500'>Upgrade to create unlimited docs</p>
      </div>
      </a>
    </li>
    <ListItem name="catch-up" link="/catch-up" icon={faClock} darkMode={darkMode} />
    <ListItem name="Discussions" link="/Discussions" icon={faComments} darkMode={darkMode} />
    <p className={`text-base ${darkMode ? 'text-white' : 'text-black'} text-left`}>Favourites</p>
    <ListItem name="👋 Getting Started" link="/favourites/getting-started" darkMode={darkMode} />
    <p className={`text-base ${darkMode ? 'text-white' : 'text-black'} text-left`}>My Channels</p>
    <Dropdown title="My Private Channel" items={[
      { label: '👋 Getting Started', link: '/My Private Channel/👋 Getting Started' }
    ]} darkMode={darkMode} faicon={faLock}/>
    <Dropdown title="Engineering" items={[
      { label: '👋 Getting Started', link: '/Engineering/👋 Getting Started' }
    ]} darkMode={darkMode} faicon={faGraduationCap}/>
    <Dropdown title="Product" items={[
      { label: '👋 Getting Started', link: '/Product/👋 Getting Started' }
    ]} darkMode={darkMode} faicon={faBook}/>
    <div className='relative bottom-0 pt-5'>
      <ListItem icon={faUserPlus} name="Add People" link="/add" darkMode={darkMode}/>
      <ListItem icon={faCircleHalfStroke} name="Templates" link="/templates" iconclass="rotate-45"darkMode={darkMode}/>
      <ListItem icon={faDownload} name="Shared with me" link="/shared" darkMode={darkMode}/>
      <ListItem icon={faArchive} name="Archieve" link="/archieve" darkMode={darkMode}/>
    </div>
  </ul>
</div>
      </aside>

      {/* Dark mode toggle button */}
      <button
        className={`fixed bottom-10 right-3 z-50 p-3  rounded-full w-19 h-15  focus:outline-none text-center`}
        onClick={toggleDarkMode}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className={darkMode ? 'text-white' : 'text-black'} />
      </button>
      <a href='/help'>
      <button
  className={`fixed bottom-0 right-4 z-50 p-3 rounded-full w-19 h-15 focus:outline-none text-center `}
  onClick={toggleDarkMode}
>
  <FontAwesomeIcon icon={faQuestion} className={darkMode ? 'text-white' : 'text-black'} />
</button>

      </a>
      {/* Main content */}
      <div className={`${pageContentClass} pt-5`}>
        <PageContentComponent darkMode={darkMode} />
      </div>
    </div>
    </div>
  );
};

export default SideBar;
