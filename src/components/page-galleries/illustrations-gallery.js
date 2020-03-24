import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Lightbox from './lightbox.js'

const IllustrationsGallery = () => (
  <StaticQuery
    query={graphql` 
    query {
      galImages: allFile(filter: {relativeDirectory: {eq: "illustrations"} }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  
  `}
  render={data => <Lightbox galImages={data.galImages.edges} />}

    
  />
    
);

export default IllustrationsGallery;