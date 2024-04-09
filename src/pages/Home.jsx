import React from 'react';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
const Home = () => {
  return (
    <div>
      <SideBar pageContent={Dashboard} />
    </div>
  )
}

export default Home