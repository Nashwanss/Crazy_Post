import { useState } from 'react'
import { MdLightMode } from 'react-icons/md';
import { HiMoon } from 'react-icons/hi';

import Header from './Components/Header/Header';
import PostFrom from './Components/PostFrom/PostFrom';
import Test from './Components/Test';

import './App.css';

export default function App() {
  const [darkMode , setDarkMode] = useState(false);
  const [dataTheme , setDataTheme] = useState('light');

  function darkModeHandler () {
    setDarkMode(prevDarkMode => !prevDarkMode)
    setDataTheme(darkMode ? 'light' : 'dark')
  }

  let darkModeIcon = darkMode ? 
  <MdLightMode size="3em" color="#4ABBE0"/> :
  <HiMoon size="3em" color="#201F55"/>




  return (
    <div className={darkMode ? "App darkMode" : "App lightMode"}
    data-theme = {dataTheme}>
      <div 
      className="dark-mode-toggle"
      onClick={darkModeHandler}
      >
        {darkModeIcon}
      </div>
      <Header darkMode={darkMode} />
      <PostFrom />
      <Test />
    </div>
  );
  //Test component is not important.
}

