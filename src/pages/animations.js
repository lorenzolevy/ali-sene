import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

class Animations extends React.Component {
  render() {
  
  return(
    <Layout>
      <SEO title="Animations" />
      <Gallery context={this.context} />
      <Link to="/">Home</Link>
    </Layout>
)}
}

export default Animations
