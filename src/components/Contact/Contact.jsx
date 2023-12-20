import React from 'react'
import Lottie from "lottie-react";
import { useForm, ValidationError } from '@formspree/react';
import doneanimation from "../../../public/animation/Animation - 1703058469128.json";
import contactanimation from "../../../public/animation/contact.json"
import './Contact.css'
export default function Contact() {
  const [state, handleSubmit] = useForm("myyrgwlz");


  if (state.succeeded) {
      return <div className='d-flex'><Lottie style={{height:"55px"}} animationData={doneanimation}  /> <p>Thanks for joining</p></div>
  }


  return (
    <section className='contact-us'>
     <h1 className='title'>
     <span className='icon-envelope'></span>
     contact us
     </h1>
     <p className='sub-title'>Contact us for more information and get notified when i publish something new  </p>
     <div className="d-flex">
      <form onSubmit={handleSubmit} className='' >
     <div style={{marginRight:"40px"}}  className='d-flex'>
     <label htmlFor='email'>Email Address:</label>
      <input autoComplete="off" required type="email" name='email' id='email' />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
     </div>
      
     <div className='d-flex' style={{marginTop:"24px"}}>
     <label htmlFor='message'>Your Message:</label>
      <textarea required name="message" id="message"></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
     </div>
      <button type="submit" disabled={state.submitting} className='submit'>Submit</button>
      </form>
      <div className="animation ">
     
      <Lottie className='contact-animation'
       style={{height:"400px"}} animationData={contactanimation}  />
     
      </div>
     </div>
    </section>
  )
}
