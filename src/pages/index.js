import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import NavGallery from "../components/navGallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


      <NavGallery />

    <div style={{
          
          padding: `25vh 0px 10px 5vh`,
        }}>
      
    <Link to="/page-2/">Contact</Link></div>
  </Layout>
)

export default IndexPage
