import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimationGallery from "../components/page-galleries/animation-gallery"


class AnimationsPage extends React.Component {
  render() {
  
  return(
    <Layout>
      <SEO title="Animations" />
      <Link to="/">Home</Link>
      <AnimationGallery />
    </Layout>
)}
}

export default AnimationsPage
