import React, { useState } from "react";
import emailjs from "emailjs-com";
import gmail  from '../assets/image/gmail.png';
import messanger  from '../assets/image/messanger.png';
import whatsapp  from '../assets/image/whatsapp.png';

import "../Style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    number: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the formData to check if it contains all the necessary fields
    console.log("Form Data before sending:", formData);
    
    emailjs.send(
      "service_4u2vqrh",  // Replace with your actual service ID
      "template_9gdia0r",  // Replace with your actual template ID
      formData,
      "87fOlmWoTeuAS24Lo"  // Replace with your actual user ID
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
    }, (err) => {
      console.log("FAILED...", err);
      alert("Failed to send the message, please try again.");
    });

    setFormData({
      name: "",
      email: "",
      project: "",
      number: "",
      message: ""
    });
  };

  return (
    <>
    {/* // Contact section */}
      <section className="contact section bd-container" id="contact">
        <span className="section-subtitle">For projects</span>
        <h2 className="section-title">Contact Us</h2>

        <div className="contact__container bd-grid">
          <div className="contact__content bd-grid">
            <div className="contact__box">
              <i className="bx bx-home contact__icon"></i>
              <h3 className="contact__title">Location</h3>
              <span className="contact__description">Kathmandu, Nepal</span>
            </div>

            <div className="contact__box">
              <i className="bx bx-phone contact__icon"></i>
              <h3 className="contact__title">Phone</h3>
              <span className="contact__description">+977-9851210676</span>
            </div>

            <div className="contact__box">
              <i className="bx bx-envelope contact__icon"></i>
              <h3 className="contact__title">Gmail</h3>
              <span className="contact__description2">kalikashineservice@gmail.com</span>
            </div>

            <div className="contact__box">
              <i className="bx bx-chat contact__icon"></i>
              <h3 className="contact__title">Chat</h3>
              <div>
                <a href="#" className="contact__social"><i className="bx bxl-whatsapp-square"><img src={whatsapp} width="30px" ></img></i></a>
                <a href="#" className="contact__social"><i className="bx bxl-telegram"><img src={gmail} width="20px" ></img></i></a>
                <a href="#" className="contact__social"><i className="bx bxl-messenger"><img src={messanger} width="20px" ></img></i></a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__inputs">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__inputs">
              <input
                type="text"
                name="project"
                placeholder="Project"
                className="contact__input"
                value={formData.project}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="number"
                placeholder="Number"
                className="contact__input"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              cols="0"
              rows="7"
              placeholder="Message"
              className="contact__input"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <input
              type="submit"
              value="Send Message"
              className="button contact__button"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
