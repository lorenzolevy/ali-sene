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
const StyledHeader = styled.header`
  padding-top: 3rem;
  display: block;
  max-width: 400px;
  min-width: 310px;
  margin: 0 auto;
`
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ali-sene-new.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Link  to="/">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Link>
      <Heading>STORY ARTIST</Heading> 
    </StyledHeader>
  )
}

export default Header