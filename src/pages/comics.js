import React from "react"
import { Link } from "gatsby"
import Comicbox from "../components/comicbox"

import Layout from "../components/layout"
import SEO from "../components/seo"



const ComicsPage = ({data}) => (
  <Layout>
    <SEO title="Comics" />
    <Link to="/">Home</Link>
    <Comicbox groupedGals={data.comics.group}/>
  </Layout>
)

export const query=graphql` 
query {
  comics: allFile(filter: {sourceInstanceName: {eq: "comics"}}, sort: {fields: sourceInstanceName}) {
    group(field: dir) {
      edges {
        node {
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
