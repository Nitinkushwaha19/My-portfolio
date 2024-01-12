import "./ContactForm.css";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  let [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_SEVICE_KEY,
        import.meta.env.VITE_REACT_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });

    let elements = document.querySelectorAll("label");
    for (let label of elements) {
      label.style.backgroundColor = "";
    }
  };

  let labelColorChange = (event) => {
    event.target.labels[0].style.backgroundColor = "#ffc107cb";
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="contact-input-layout">
          <label htmlFor="name">
            <i className="fa-solid fa-user"></i>
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleInputChange}
            onClick={labelColorChange}
            required
          />
        </div>
        <div className="contact-input-layout">
          <label htmlFor="email">
            <i className="fa-solid fa-at"></i>
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleInputChange}
            onClick={labelColorChange}
            required
          />
        </div>
        <div className="contact-input-layout">
          <label htmlFor="message">
            <i className="fa-regular fa-envelope"></i>
          </label>
          <textarea
            name="message"
            id="message"
            cols="98"
            rows="5"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            onClick={labelColorChange}
            required
          ></textarea>
        </div>
        <button className="formBtn">Send message</button>
      </form>
    </div>
  );
}
