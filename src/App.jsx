
import React, { useContext } from 'react';
import { ThemeContext } from './AddProvider/ThemeProvider';


export default function App() {
  const { theme, togglebtn } = useContext(ThemeContext); // Access theme and toggle function

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F7F7F7]' : 'bg-gray-800 text-white'}`}>
      <button
        onClick={togglebtn}
        className="absolute top-5 right-5 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded shadow"
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      <h1 className="text-4xl font-bold text-center mt-12">Current Theme: {theme}</h1>
    </div>
  );
}



