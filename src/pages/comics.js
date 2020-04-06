import React from "react"
import { graphql } from "gatsby"
import Comicbox from "../components/comic-box"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledTitle from "../components/page-title"
import BackArrow from '../components/back-arrow'



const ComicsPage = ({data}) => (
  <Layout>
    <SEO title="Comics" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <BackArrow />
    <StyledTitle>comics</StyledTitle>
    </div>
    <Comicbox groupedGals={data.comics.group}/>
  </Layout>
)

export const query=graphql` 
query {
  comics: allFile(filter: {sourceInstanceName: {eq: "comics"}}, sort: {fields: relativePath, order: ASC}) {
    group(field: dir) {
      edges {
        node {
          publicURL
          name
          childImageSharp {
            fluid (maxWidth:1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}

`

export default ComicsPage
