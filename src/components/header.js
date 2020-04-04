import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Heading = styled.h1`
  font-family: Roboto;
  color: whitesmoke;
  text-align: center;
  padding-top: 1.2rem;

`
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
    <header style={{
      paddingTop: `3rem`,
      display: `block`,
      maxWidth: `400px`,
      minWidth: `310px`,
      margin: `0 auto`,
    }}>
      <Link  to="/">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Link>
      <Heading>STORY ARTIST</Heading> 
    </header>
  )
}

export default Header