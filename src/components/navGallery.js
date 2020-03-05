import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
            id
            childImageSharp {
              fixed(width: 300) {
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
        // Uses the queried data (strings) in order to 
        // link to "baseURL" + "NameOfImageBeingMapped" in the Link comp
        <Link to={edge.node.name}><Img fixed={edge.node.childImageSharp.fixed} /></Link> 
        )}
      </div>
    </div>
   ) 
  }