import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = ({ name, link, icon, darkMode ,iconclass}) => {
  return (
    <li className='text-sm'>
      <a href={link} className={`flex items-center p-2 rounded-lg group ${darkMode ? 'text-white dark:hover:bg-gray-700' : 'text-gray-500 dark:hover:bg-gray-100'}`}>
        <FontAwesomeIcon icon={icon} className={` ${iconclass}`}/>
        <span className="ms-3">{name}</span>
      </a>
    </li>
  );
};

export default ListItem;
