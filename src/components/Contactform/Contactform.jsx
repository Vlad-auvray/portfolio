import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contactform.css";

export const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lvhb1kc', 'template_fcexbr9', form.current, 'pDGGmn4O7hI3-FZV4')
      .then((result) => {
          alert("Message envoyé !");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='form-bloc' ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className='msg-box' name="message" />
      <input className='snd-btn' type="submit" value="Envoyer" />
    </form>
  );
};
export default Contactform;