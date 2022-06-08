import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailJs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.prevemtDefault();

    e.target.reset();

    emailJs.sendForm('service_yof287f', 'template_2f48gle',  form.current, 'G7VZn09Xq00zCpYaW')
  };
  return (
   <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
       <div className="contact__options">
         <article className="contact__option">
           <MdOutlineEmail className="Contact__option-icon"/>
           <h4>Email</h4>
           <h5>mhuzaifaimran88@gmail.com</h5>
           <a href="mailto:mhuzaifaimran88@gmail.com">Send a Message</a>
         </article>
         <article className="contact__option">
           <RiMessengerLine className="Contact__option-icon"/>
           <h4>Messanger</h4>
           <h5>M Huzaifa Imran</h5>
           <a href='https://m.me/huzaifa.imran.39'>Send a Message</a>
         </article>
         <article className="contact__option">
           <BsWhatsapp className="Contact__option-icon"/>
           <h4>Whatsapp</h4>
           <h5>+923204522924</h5>
           <a href='https://api.whatsapp.com/send?phone=+923204522924'>Send a Message</a>
         </article>
       </div>
       {/* END OF CONTACT OPTIONS */}

       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name="name" placeholder="Your Full Name" required />
         <input type="email" name="email" placeholder="Your Email" required />
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
     </div>
   </section>
  )
}

export default Contact;