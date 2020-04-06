import React from "react"
import Socials from "./socials"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Heading = styled.h2`
  font-family: Roboto;
  color: whitesmoke;
  text-align: center;
  padding-top: .3rem;
  font-size: 2.3rem;
`
const StyledHeader = styled.header`
  padding-top: 2rem;
  position: relative;
  max-width: 400px;
  margin: 0 auto;
`
const StyledLink = styled(Link)`
  display: block;
  max-width: 400px;
  min-width: 310px;
  margin: 0 auto;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ali-sene-new.png" }) {
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
      
      <StyledLink to="/">
        <Img fluid={data.file.childImageSharp.fluid} />
      </StyledLink>
      <Heading>STORY ARTIST<Socials /></Heading>
      
    </StyledHeader>
  )
}

export default Header