import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
 import Navbar from '../Navbar/Navbar';
 import Whatsapp from '../Contact/WhatsApp.png'
 import { Link } from 'react-router-dom';
 function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_p0knsba', 'template_a4fusy5', form.current, {
          publicKey: '5BYWMgLME1k_vBbQl',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()
    };

  return (
    <section>
      <Navbar />
      <div className='box'>
    <div className="contact-container">
      <h2 className='contact'>Contact Us </h2>
       <form ref={form} onSubmit={sendEmail}>
        <input className='fName'  type="text" placeholder='Full Name' name='user_name' required />
        <input className='email1' type="email" placeholder='Email' name='user_email' required />
        <input className='subject' type="text" placeholder='Subject' name='subject' required />
        <textarea className='textarea1' name="message" cols="30" rows="10">Comment</textarea>
        <button className='buttonSubmit' type='submit'>Send Message</button>
        <p className='class'>Contact Through Whatsapp</p>
        <Link to="https://wa.me/92xxxxxxxxxx? Hello How I can help you ?" target='_blank'><img className='whatsapp' src={Whatsapp} alt="" /></Link>
       </form>
    </div>
    </div>
    </section>
  )
}

 export default Contact 


