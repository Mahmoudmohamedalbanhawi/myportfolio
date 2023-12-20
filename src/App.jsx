
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'



function App() {
  const [theme , settheme] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        settheme(true)
      }
      else {
        settheme(false)
      }
    })
  },[])
  return (
    <div id='up' className='container'>
  <Header/>
  
  <Hero/>
  <div className="divider"></div>
    <Main/>
    <div className="divider"></div>
    <Contact/>
    <div className="divider"></div>
    <Footer/>
    {theme ? <a href="#up">
    <button className='scroll2Top icon-keyboard_arrow_up'></button>
    </a> : <a style={{display:"none"}} href="#up">
    <button className='scroll2Top icon-keyboard_arrow_up'></button>
    </a>}
    </div>
  )
}

export default App
