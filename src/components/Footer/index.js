import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">ghg</a>
  </footer>
)
