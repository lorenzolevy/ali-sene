import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ali-sene-new.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (

    <div
    style={{
      display: `block`,
      maxWidth: `400px`,
      minWidth: `310px`,
      margin: `0 auto`,
    }}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>

  )
}

export default Header