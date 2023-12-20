import React from 'react'
import Lottie from "lottie-react";
import  './Hero.css'
import developeranimation from "../../../public/animation/Animation - 1703059820247.json"
export default function Hero() {
  return (
    <section className='hero d-flex'>
      <div className="left-section">
      <div className="parent-avatar d-flex">
        <img src='./img.jpeg' className='avatar' />
        <div className='icon-verified'></div>
      </div>
      <h1 className='title'>Software developer, front end developer(React.js), Back end developer(Node.js)</h1>
      <p className='sub-title'>I'm Mahmoud Albanhawi Experienced full stack developer specializing in Node.js and React.js, with a passion for creating robust and scalable web applications. With a strong background in both front-end and back-end development, I have successfully delivered high-quality projects that meet client requirements and exceed expectations.
In my journey as a developer, I have honed my skills in designing and implementing RESTful APIs, building responsive user interfaces, and optimizing application performance.
</p>
    <div className="all-icons d-flex">
      <div className="icon icon-twitter"></div>
      <a target='_blank' href='https://www.linkedin.com/in/mahmoud-albanhawi-a24190245/'>

      <div className="icon icon-linkedin"></div>
      </a>
      <a target='_blank' href="https://github.com/Mahmoudmohamedalbanhawi">

      <div className="icon icon-github-square"></div>
      </a>
      <div className="icon icon-instagram"></div>
    </div>
      </div>
      <div className="right-section animation ">
      <Lottie animationData={developeranimation}  />
      </div>
    </section>
  )
}
