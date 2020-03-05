import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, 200px )` 
};

export default () => {

    const data = useStaticQuery(graphql` 
    query {
      allFile(filter: {relativeDirectory: {eq: "navgallery"} }) {
        edges {
          node {
            name
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }`)
   
  
    return (
    <div>
      <h1>Hello gatsby-image</h1>
      <div style={imgGridStyle}>
        {data.allFile.edges.map(edge => 
        <Img fixed={edge.node.childImageSharp.fixed} /> 
        )}
      </div>
    </div>
   ) 
  }