import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .6rem;
    `;

const ComicsGallery = () => (
  <StaticQuery
  query={graphql` 
  query {
    comics: allFile(filter: {sourceInstanceName: {eq: "comics"}}, sort: {fields: sourceInstanceName}) {
      group(field: dir) {
        edges {
          node {
            name
            childImageSharp {
              fluid (maxWidth:1800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }

`}
render={data => 
<Grid> {data.comics.group.map((group, index) => (
 <div key={index}>
  <Img key={index} fluid={group.edges[0].node.childImageSharp.fluid} />
 </div>
))}
</Grid>
}
/>
)


export default ComicsGallery;
