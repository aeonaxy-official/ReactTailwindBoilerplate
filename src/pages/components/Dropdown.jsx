import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ title, items, darkMode ,faicon}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
    <div className="relative inline-block text-white">
      <button
        onClick={toggleDropdown}
        className="flex items-center rounded px-3 py-2 focus:outline-none"
      >
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`transform transition-transform duration-300 ${
            !isOpen ? '-rotate-90' : ''
          } ${darkMode ? 'text-white' : 'text-gray-500'}`}
        />
        <FontAwesomeIcon
          icon={faicon}
          className={`${darkMode ? 'text-white' : 'text-gray-500'} pl-4`}
        />
        <h6 className={`pl-2 text-sm ${darkMode ? 'text-white' : 'text-gray-500'}`}>{title}</h6>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul className={`py-1 text-xs ${darkMode ? 'text-white' : 'text-gray-500'}`}>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.link} className={`block px-4 py-2 hover:bg-gray-100 hover:bg-gray-100  group ${darkMode ? 'dark:hover:bg-gray-700' : 'dark:hover:bg-gray-100'}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </li>
  );
}

export default Dropdown;
