import React, { useState } from 'react'
import './Main.css'
export default function Main() {
  const myprojects = [
    {projecttitle:"Bakery Project",Category:["HTML","CSS"],imgpath:"./1.jpg", description:"Web responsive design using HTML & CSS" , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/Bakery" , link:"https://mahmoudmohamedalbanhawi.github.io/Bakery/"},
    {projecttitle:"fokir Project",Category:["HTML","CSS",],imgpath:"./1.jpg" , description:"Web responsive design using HTML & CSS" , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/Fokir-project" , link:"https://mahmoudmohamedalbanhawi.github.io/Fokir-project/"},
    {projecttitle:"simone Project",Category:["HTML","CSS",],imgpath:"./1.jpg" ,  description:"Web responsive design using HTML & CSS" , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/simone" , link:"https://mahmoudmohamedalbanhawi.github.io/Simone/"},
    {projecttitle:"Quote of the Day Project",Category:["js"],imgpath:"./1.jpg" ,  description:"Web design project using html css and java ... script When you press the button it displays a random quote" , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/Quote-project" , link:"https://mahmoudmohamedalbanhawi.github.io/Quote-project/"},
    {projecttitle:"BookMark Project",Category:["js"],imgpath:"./1.jpg" ,  description:"Web design project that display book name and site url " , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/BookMark" , link:"https://mahmoudmohamedalbanhawi.github.io/BookMark/"},
    {projecttitle:"CRUD Project",Category:["js"],imgpath:"./1.jpg" ,  description:"Web design using HTML CSS JS that can create retrieve update and delete project " , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/CRUD-project" , link:"https://mahmoudmohamedalbanhawi.github.io/CRUD-project/"},
    {projecttitle:"Smart login Project",Category:["js"],imgpath:"./1.jpg" ,  description:"this project using html , css , javascript , jquery and webfonts i used regular expression as a validation for every input in Signup Page there is a validation for every input if you already hava an email a message will appear to you that an email address with this name already exists " , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/Smart-login" , link:"https://mahmoudmohamedalbanhawi.github.io/Smart-login/"},
    {projecttitle:"Weather API Project",Category:["js"],imgpath:"./1.jpg" ,  description:"this project using html , css , javascript , jquery and webfonts Project displays temperature, weather, wind, and displays the minimum and maximum temperature for the next two days " , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/API-Weather" , link:"https://mahmoudmohamedalbanhawi.github.io/API-Weather/"},
    {projecttitle:"E-commerce Project",Category:["REACT"],imgpath:"./1.jpg" ,  description:"E-commerce project using react , react Hooks , redux , formik validation  " , githublinks:"https://github.com/Mahmoudmohamedalbanhawi/E-commerce-React" , link:"https://mahmoudmohamedalbanhawi.github.io/E-commerce-React/"},    
  ]
  const [arr,setarr] = useState(myprojects)
  const handleclick = (buttonCategory) =>{
    setcurrentactive(buttonCategory)
    const newArr = myprojects.filter((item)=>{
      const ZZZ = item.Category.find((myitem)=>{
        return myitem ===buttonCategory
      })
      return ZZZ === buttonCategory
    })
    setarr(newArr)
  }
  const[currentactive,setcurrentactive] = useState('all')
  return (
   <main className='d-flex'>
    <section className='d-flex left-section'>
      <button onClick={()=>{
        setcurrentactive('all')
        setarr(myprojects)
      }} className={currentactive === 'all' ? 'active' : null}>All projects</button>
      <button onClick={()=>{
        handleclick('HTML')
      }} className={currentactive === "HTML" ? 'active' : null}>HTML & CSS</button>
      <button onClick={()=>{
       handleclick("js")
      }} className={currentactive === 'js' ? 'active' : null}>Java script</button>
      <button onClick={()=>{
        handleclick("REACT")
      }} className={currentactive === 'REACT' ? 'active' : null}>React</button>
      
    </section>
    <section className='d-flex right-section'>
      {arr.map((item)=>{
        return (
          <article key={item.imgpath} className='card'>
        <img width={266} src={item.imgpath} alt=''/>
        <div style={{width:"266px"}} className=" box">
          <h1 className='title'>{item.projecttitle}</h1>
          <p className='sub-title'>{item.description}</p>
          <div className="d-flex icons">
            <div className='d-flex' style={{gap:"11px"}}>
              <a href={item.link} target='_blank'>
            <div className='icon-link'>

            </div>
              </a>
              <a href={item.githublinks} target='_blank'>
            <div className='icon-github-square'>

            </div>
              </a>
       
            
            </div>
            <a className='link' href="">more
            <span className='icon-arrow-right'></span>
            </a>
          </div>
        </div>
      </article>
        )
      })}
    </section>
   </main>
  )
}
