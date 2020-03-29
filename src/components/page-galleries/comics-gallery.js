import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'


const ComicsGallery = () => (
  <StaticQuery
  query={graphql` 
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

`}
render={data => data.comics.group.map((group, index) => (
    <div key={index}>
    comic {index}
    {group.edges.map(image => (
        <Img key={image.node.childImageSharp.fluid.originalName} fluid={image.node.childImageSharp.fluid} />
    ))}
    </div>
))}

/>
)

export default ComicsGallery;
