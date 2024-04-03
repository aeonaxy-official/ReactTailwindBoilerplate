import React from 'react';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import NotificationBar from './components/NotificationBar';
const About = () => {
  return (
    <div>
      <SideBar pageContent={Dashboard} />
    </div>
  )
}

export default About