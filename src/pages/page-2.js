import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact</h1>
    <p>Info</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
