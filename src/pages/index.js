import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import NavGallery from "../components/nav-gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <NavGallery />

  </Layout>
)

export default IndexPage
