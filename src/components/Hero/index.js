import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"

export const Hero = () => {
  return (
    <div className="c-hero__container">
      <div className="c-hero__wrapper--orange">
        <div className="c-hero__wrapper--white">
          <h1>D</h1>
          <h3>DAM-MAD</h3>
          <h1>M</h1>
        </div>
      </div>
      <div className="c-hero__container--text">
        <h2>SOFTWARE</h2>
        <h2>+</h2>
        <h2>DESIGN</h2>
      </div>
    </div>
  )
}
