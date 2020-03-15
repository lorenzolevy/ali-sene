import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      
      <div style={{
          display: `grid`,
          gridTemplateColumns: `repeat(3, 280px)`,
          gridTemplateRows: `repeat(2, auto)`,
          gridGap: `2rem`,
        }}>

        {data.allFile.edges.map(edge =>
        
        <div style={{
          boxShadow: `12px 15px 13px 2px rgba(0, 0, 255, .2)`,
        }}
        >
            <Img fluid={edge.node.childImageSharp.fluid} />
            <p>{edge.node.name}</p>
            
        </div>
        )}

      </div>
      
    </div>
   ) 
  }


