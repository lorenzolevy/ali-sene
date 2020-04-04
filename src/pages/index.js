import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import BgImg from "gatsby-background-image"

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
`
const StyledLink = styled(Link)`

`;

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <Grid>
        <StyledLink to="/illustrations">
            <BgImg
                fluid={data.galImages.edges[0].node.childImageSharp.fluid}
            >
                    ILLUSTRATION
            </BgImg>
        </StyledLink>

        <Link to="/backgrounds">
            <BgImg
                fluid={data.galImages.edges[1].node.childImageSharp.fluid}
            >
                    BACKGROUNDS
            </BgImg>  
        </Link>
        
        <Link to="/comics">
            <BgImg
                fluid={data.galImages.edges[2].node.childImageSharp.fluid}
            >
                    COMICS
            </BgImg>
        </Link>   

        <Link to="/animations">    
            <BgImg
                fluid={data.galImages.edges[3].node.childImageSharp.fluid}
            >
                    ANIMATIONS
            </BgImg>
        </Link>

        <Link to="/characters">
            <BgImg
                fluid={data.galImages.edges[4].node.childImageSharp.fluid}
            >
                    CHARACTERS
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
