import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/page-galleries/illustrations-gallery"

const IllustrationsPage = () => (
  <Layout>

    <SEO title="Illustrations" />
    <Link to="/">Home</Link>
      <Gallery />

    
  </Layout>
)

export default IllustrationsPage
