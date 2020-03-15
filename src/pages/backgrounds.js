import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/page-galleries/backgrounds-gallery"

const Backgrounds = () => (
  
  <Layout>
    <Link to="/">Home</Link>
    <SEO title="Backgrounds" />
      <Gallery />


    
  </Layout>
)

export default Backgrounds
