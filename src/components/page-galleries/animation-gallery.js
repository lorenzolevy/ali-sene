import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Videobox from '../videobox'

const AnimationGallery = () => (
  <StaticQuery
  query={graphql` 
  query {
    galImages: allFile(filter: {relativeDirectory: {eq: "animations"} }) {
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
render={data => <Videobox galImages={data.galImages.edges} />}

/>
)

export default AnimationGallery;





