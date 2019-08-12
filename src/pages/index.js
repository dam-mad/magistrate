import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout.js"
import Image from "../components/image"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import { Contact } from ""

const IndexPage = () => (
  <Layout>
    <SEO
      description="DAMMAD Software + Design"
      title="DAM-MAD"
      keywords={[
        `dallin`,
        `mikayda`,
        `gatsby`,
        `javascript`,
        `react`,
        `dammad`,
        `software`,
        `design`,
      ]}
    />
    <Hero />
    <Contact />
  </Layout>
)

export default IndexPage
