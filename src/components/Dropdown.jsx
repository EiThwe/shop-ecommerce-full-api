import { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Dropdown
      </button>
      <ul
        className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Option 1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Option 2
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Option 3
          </a>
        </li>
      </ul>
    </div>
  );
}
