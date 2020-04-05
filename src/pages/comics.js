import React from "react"
import { Link, graphql } from "gatsby"
import Comicbox from "../components/comic-box"

import Layout from "../components/layout"
import SEO from "../components/seo"



const ComicsPage = ({data}) => (
  <Layout>
    <SEO title="Comics" />
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
