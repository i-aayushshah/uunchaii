import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gzzftgb', 'template_732fvfh', form.current, {
        publicKey: 'ZuBg4iT_blu25zAnO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
            form.current.reset();
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1 className='about-heading'>Contact Us</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>Contact us if you have any doubts!</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' /> <p>uunchai@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' /> <p>+1 567890123</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='' /> <p>PA, United States</p>
            </div>
          </div>
        </div>
        <form className='contact-right' ref={form} onSubmit={sendEmail}>
          <label htmlFor=''>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='user_name' required/>
          <label htmlFor=''>Your Email</label>
          <input type='email' name='user_email' placeholder='Enter your Email' required/>
          <label htmlFor=''>Write your message here</label>
          <textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
          <button className='contact-submit' type='submit' value='Send'>
            Submit
          </button>
          {showSuccessMessage && (
            <div className='success-message'>
              <p>Message sent successfully! We will contact you as soon as possible.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
