import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/page-galleries/characters-gallery"

const Characters = () => (
  <Layout>
    <SEO title="Characters" />
    <Link to="/">Home</Link>
      <Gallery />

    
  </Layout>
)

export default Characters
