import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import StyledTitle from "../components/page-title"
import BackArrow from '../components/back-arrow'


const IllustrationsPage = ({data}) => (
  
  <Layout>
    <SEO title="Illustrations" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <BackArrow />
    <StyledTitle>illustration</StyledTitle>
    </div>
      <Gallery galImages={data.galImages.edges} />
  </Layout>
)

export const query=graphql` 
query {
  galImages: allFile(filter: {relativeDirectory: {eq: "illustrations"} }) {
    edges {
      node {
        publicURL
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

export default IllustrationsPage
