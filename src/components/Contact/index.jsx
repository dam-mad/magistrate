import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"

export const Contact = () => {
  return (
    <form method="post" action="#">
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
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  )
}
