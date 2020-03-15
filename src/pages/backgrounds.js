import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundsGallery from "../components/page-galleries/backgrounds-gallery"

const BackgroundsPage = () => (
  
  <Layout>
    <Link to="/">Home</Link>
    <SEO title="Backgrounds" />
      <BackgroundsGallery />


    
  </Layout>
)

export default BackgroundsPage
