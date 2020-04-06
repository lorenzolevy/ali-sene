import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoGallery from "../components/video-gallery"
import StyledTitle from "../components/page-title"
import BackArrow from '../components/back-arrow'

const AnimationsPage = ({data}) => (
  
  <Layout>
    <SEO title="Animations" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <BackArrow />
    <StyledTitle>animations</StyledTitle>
    </div>
    
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

