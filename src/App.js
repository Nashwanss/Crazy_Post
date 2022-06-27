//importing react libraries
import { useState } from 'react'
import { MdLightMode } from 'react-icons/md';
import { HiMoon } from 'react-icons/hi';
// import components
import Header from './Components/Header/Header';
import PostSection from './Components/PostSection/PostSection';

//import assets

// import CSS file
import './App.css';

export default function App() {
  const [darkMode , setDarkMode] = useState(true)
  function darkModeHandler () {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }


  let darkModeIcon = darkMode ?
        <MdLightMode size="3em" color="#4ABBE0"/> :
        <HiMoon size="3em" color="#201F55"/>

  return (
    <div className={darkMode ? "App darkMode" : "App lightMode"}>
      <div 
      className="dark-mode-toggle"
      onClick={darkModeHandler}
      >
        {darkModeIcon}
      </div>
      <Header darkMode={darkMode} />
      <PostSection darkMode={darkMode} />
    </div>
  );
}

