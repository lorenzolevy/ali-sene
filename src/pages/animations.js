import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class AnimationsPage extends React.Component {
  render() {
  
  return(
    <Layout>
      <SEO title="Animations" />
      <Link to="/">Home</Link>
    </Layout>
)}
}

export default AnimationsPage
