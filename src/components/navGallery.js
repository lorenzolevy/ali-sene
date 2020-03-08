import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(3, 200px )`,
  gridTemplateRows: `repeat(3, auto)`,
  gridGap: '1px 9px'
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
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
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
        <div>
        <Link to={edge.node.name}><Img fluid={edge.node.childImageSharp.fluid} /></Link> <p>{edge.node.name}</p> 
      
        </div>
        // added a p element to show the "name" being queried
        )}
      </div>
    </div>
   ) 
  }