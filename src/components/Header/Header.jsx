import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";

import  './Header.css'
export default function Header() {

  const[showmodel , setshowmodel] = useState(false)
  const[theme , settheme] = useState(localStorage.getItem("currentmode"))
  useEffect(()=>{
    if(theme === 'light'){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
    else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  },[theme])
  return (
    <header className='d-flex'> 
    <button className='menu icon-menu d-flex' onClick={()=>{setshowmodel(true)}}></button>
      <div></div>
        <nav>
            <ul className='d-flex'>
            
                <li><a href="">About</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Speaking</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <button onClick={()=>{
          localStorage.setItem("currentmode",theme === "dark" ? "light" : "dark")

          settheme(localStorage.getItem("currentmode"))

        }} className='mode d-flex'>
         {theme === "dark" ?  <span className='icon-moon-o'></span> :  <span className='icon-sun'></span>}
        </button>



        {showmodel ? <div className="fixed" >
          
          <ul className='modal '>
          <li>
                <button className='icon-close' onClick={()=>{setshowmodel(false)}}></button>
              </li>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Uses</a></li>
          </ul>
        
      </div> : null}
    </header>
  )
}
