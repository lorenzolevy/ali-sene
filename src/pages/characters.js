import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import StyledTitle from "../components/page-title"
import BackArrow from '../components/back-arrow'

const CharactersPage = ({data}) => (
  
  <Layout>
    <SEO title="Characters" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <BackArrow />
    <StyledTitle>characters</StyledTitle>
    </div>
      <Gallery galImages={data.galImages.edges} />
  </Layout>
)

export const query=graphql` 
query {
  galImages: allFile(filter: {relativeDirectory: {eq: "characters"} }) {
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

export default CharactersPage