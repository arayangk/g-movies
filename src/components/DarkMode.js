import { useState } from "react";
import "../assets/css/gs-movie.css";


const DarkMode = ({mode}) => {

  

  const setDark = () => {
    localStorage.setItem("data-theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };
  
  const setLight = () => {
    localStorage.setItem("data-theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  
  const storedTheme = localStorage.getItem("data-theme");
  
  // const prefersDark =
  //   window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // const defaultDark =
  //   storedTheme === "dark" || (storedTheme === null && prefersDark);
  
  if (storedTheme==='dark') {
    setDark();
  }
  else {
    setLight();
  }
  
  const toggleTheme = () => {
    if (mode) {
      setDark();
    } else {
      setLight();
    }
  };

  

  return (
    
    <div onClick={toggleTheme}>
    <i className={`fas ${storedTheme==='light' ? 'fa-moon' : 'fa-sun'}`}></i> </div>
        
  );
  
}




  


export default DarkMode;
