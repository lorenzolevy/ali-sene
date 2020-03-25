import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import NavGallery from "../components/page-galleries/nav-gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <NavGallery />

  </Layout>
)

export default IndexPage
