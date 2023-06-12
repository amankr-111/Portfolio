import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import img1 from '../../Images/contact.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2lm5qhl', 'template_voyyh8k', form.current, 'SHl36sK5Uoz3pwnwQ')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h1 className='hhh'><span style={{color:'red', fontSize:'3rem'}}>C</span>ontact Me 📞</h1>
      <div id='contact1'>
      <img src={img1} className='imgCon' alt=''/>
       <div className='contactContainer'>
       <form ref={form} onSubmit={sendEmail}>
      <label>Name : </label>
      <input type="text" style={{marginLeft:'30px'}} name="user_name" />
      <br/>
        <br/>
      <label>Email : </label>
      <input type="email" style={{marginLeft:'40px'}} name="user_email" />
        <br/>
      <br/>
      <label>Message : </label>
      <textarea name="message" style={{height:'100px'}} />
      <br/>
      <br/>
      <input type="submit" className='btn1' value="Send" />
    </form>
       </div>
      </div>
    </section>
  )
}

export default Contact