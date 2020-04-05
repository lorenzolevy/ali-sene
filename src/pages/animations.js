import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoGallery from "../components/video-gallery"

const AnimationsPage = ({data}) => (
  
  <Layout>
    <SEO title="Animations" />
    <VideoGallery galImages={data.galImages.edges} />
      

    
  </Layout>
)

export const query=graphql` 
query {
  galImages: allFile(
    filter: {relativeDirectory: {eq: "animations"} },
    sort: {order: ASC, fields: relativePath}) {
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

export default AnimationsPage

