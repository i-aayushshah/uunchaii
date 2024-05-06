import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
        <h1 className="about-heading">Contact Us</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Contact us if you have any doubts!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>uunchai@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+1 567890123</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>PA, United States</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder='Enter your Email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button className="contact-submit" type='submit'>Submit Now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact
