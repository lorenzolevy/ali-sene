import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "./navGallery.css"



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
      
      <div className="gridStyler">
        {data.allFile.edges.map(edge =>
        // Uses the queried data (strings) in order to 
        // link to "baseURL" + "NameOfImageBeingMapped" in the Link comp
        <div style={{
          display: `grid`,
          boxShadow: `12px 15px 13px 2px rgba(0, 0, 255, .2)`,
          justifyItems: `center`,
          // minWidth: `310px`,
          // minHeight: `200px`,
        }}
        >
          <div style={{
              position: `relative`,
          }}>

            <Link to={edge.node.name} key={edge.node.id}>
              <Img
              style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              }} 
              fluid={edge.node.childImageSharp.fluid} /></Link>

          </div>
        </div>
        
        )}
      </div>
    </div>
   ) 
  }