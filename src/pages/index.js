import React from "react"
import { Link, graphql } from "gatsby"
import BgImg from "gatsby-background-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Grid = styled.div`
    @media (max-width: 580px) {
        display: grid;
        grid-template-rows: repeat(5, 1fr);
    }
    @media (max-width: 980px) and (min-width: 580px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        

    }
    @media (min-width: 980px) {
        display: grid;
        grid-template-columns: repeat(3, 300px);
            
    }
    grid-gap: .6rem;  
    > a > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        border-radius: .3rem;
        box-shadow: 12px 13px 13px 2px rgba(0, 0, 255, .2); 
        &:before {
            border-radius: .3rem;
        }
        &:after {
            border-radius: .3rem;
        }        
    }
    > a {
        text-decoration: none;
        color: whitesmoke;
        font-family: Roboto;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: .05rem;
    }
    > a > div {
        height: 300px;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: whitesmoke;
    font-family: Roboto;
    font-size: 1.2rem;
    text-transform: uppercase;
    
    
`;

const StyledText = styled.div`
    background-color: hsla(262, 46%, 51%, 0.3);
    border-radius: 0.3rem;
    height: 100%;
    width: 100%;
    padding: 0 .4rem;
    letter-spacing: .06rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    &:hover {
        background-color: hsla(262, 46%, 45%, 0.4);
    }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <Grid>
        <StyledLink to="/illustrations">
            <BgImg
                fluid={data.galImages.edges[0].node.childImageSharp.fluid}
            >
                    <StyledText>ILLUSTRATION</StyledText>
            </BgImg>
        </StyledLink>

        <Link to="/backgrounds">
            <BgImg
                fluid={data.galImages.edges[1].node.childImageSharp.fluid}
            >
                    <StyledText>BACKGROUNDS</StyledText>
            </BgImg>  
        </Link>
        
        <Link to="/comics">
            <BgImg
                fluid={data.galImages.edges[2].node.childImageSharp.fluid}
            >
                    <StyledText>COMICS</StyledText>
            </BgImg>
        </Link>   

        <Link to="/animations">    
            <BgImg
                fluid={data.galImages.edges[3].node.childImageSharp.fluid}
            >
                    <StyledText>ANIMATIONS</StyledText>
            </BgImg>
        </Link>

        <Link to="/characters">
            <BgImg
                fluid={data.galImages.edges[4].node.childImageSharp.fluid}
            >
                    <StyledText>CHARACTERS</StyledText>
            </BgImg>
        </Link>   
    </Grid>

  </Layout>
)

export const query=graphql` 
query {
  galImages: allFile(filter: {relativeDirectory: {eq: "navgallery"}}, sort: {order: ASC, fields: relativePath}) {
    edges {
      node {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
export default IndexPage
