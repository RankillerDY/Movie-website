import React from 'react'

export default function Contact() {
    return (
        <div className="contact-page-container">
        <h2>Contact Us</h2>
        <p>Please fill out the form below to get in touch with us:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="4"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    )
}
