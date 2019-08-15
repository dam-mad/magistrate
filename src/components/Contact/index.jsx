import React from "react"
import "./style.css"
import Modal from "../Modal"

export const Contact = () => {
  return (
    <Modal>
      <form
        name="contact"
        method="post"
        data-netlify-honeypot="bot-field"
        className="c-form__contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h1>Contact our team for inquiries</h1>
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>

        <button className="c-button__form" type="submit">
          Send
        </button>
      </form>
    </Modal>
  )
}
