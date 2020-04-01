import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lightbox from "../components/lightbox"

const BackgroundsPage = ({data}) => (
  
  <Layout>
    <Link to="/">Home</Link>
    <SEO title="Backgrounds" />
      
      <Lightbox galImages={data.galImages.edges} />

    
  </Layout>
)

export const query=graphql` 
query {
  galImages: allFile(filter: {relativeDirectory: {eq: "backgrounds"} }) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

`

export default BackgroundsPage
