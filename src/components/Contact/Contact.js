import './Contact.css'
import React from 'react'
import post from './post.png'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zzuwxz7', 'template_42hux6t', form.current, 'DwaOonm5HiVcD1ItH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    Array.from(form.current).forEach((ele,index)=>{
      index === 3 ? "" : ele.value=""
    })
  };

  return (
    <div className='contact' id="contact">
        <div className='title'>
            <div>LET'S CONNECT <span className='bar'></span></div> 
            <pre>{`If you want to know more about me or my work, or if you 
would just like to say hello, send me a message. I'd love to hear from you.`}</pre>
        </div>
        <div className='form-wrapper'>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
              <label>Name</label> <br/>
              <input type="text" name="user_name" autoComplete='off' required= 'true' /> <br/>
              <label>Email</label> <br/>
              <input type="email" name="user_email" autoComplete='off' required= 'true'/> <br/>
              <label>Message</label><br/>
              <textarea name="message" rows={6} cols={34} autoComplete='off' required= 'true'/><br/>
              <input type="submit" value="SEND" />
            </form>

            <img src={post} alt="" />
        </div>
    </div>
  )
  
};

export default Contact