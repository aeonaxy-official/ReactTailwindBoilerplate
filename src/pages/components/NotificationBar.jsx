import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NotificationBar = () => {
  const [notificationVisible, setNotificationVisible] = useState(true);

  const toggleNotification = () => {
    setNotificationVisible(!notificationVisible);
  };

  return (
    <div>
      {notificationVisible && (
        <div className="bg-blue-600 p-3 text-white text-center flex items-center justify-center notification fixed top-0 left-0 right-0 z-50">
          <div style={{ whiteSpace: "nowrap" }}>Enable browser notifications to avoid missing out on important activities.</div>
          <div className='flex text-center'>
            <button className='bg-blue-700 hover:bg-blue-800 p-1 pl-2 pr-2 rounded mr-3' style={{ whiteSpace: "nowrap", fontSize: "0.6rem" }}>
              <FontAwesomeIcon icon={faBell} className='pr-1'/> Enable notifications
            </button>
            <button onClick={toggleNotification} className="">
              <FontAwesomeIcon icon={faTimes} className="text-white text-base" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBar;
