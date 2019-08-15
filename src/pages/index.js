import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer/index.js"

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
