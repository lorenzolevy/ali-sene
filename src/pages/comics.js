import React from "react"
import { Link } from "gatsby"
import ComicsGallery from "../components/page-galleries/comics-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"



const ComicsPage = () => (
  <Layout>
    <SEO title="Comics" />

      

    <Link to="/">Home</Link>
    <ComicsGallery />
  </Layout>
)

export default ComicsPage
