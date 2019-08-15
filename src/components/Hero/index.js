import React from "react"
import "./style.css"

export const Hero = () => {
  return (
    <div className="c-hero__container">
      <div className="c-hero__wrapper--orange">
        <div className="c-hero__wrapper--white">
          <a href="https://github.com/dallin-r-parker" target="_blank">
            <h1>D</h1>
          </a>
          <h3>DAM-MAD</h3>
          <a href="https://github.com/kdabug" target="_blank">
            <h1>M</h1>
          </a>
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
