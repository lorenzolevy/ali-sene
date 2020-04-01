import React from "react"
import Img from 'gatsby-image'
import styled from 'styled-components'


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .6rem;
    `;

const Comicbox = ({groupedGals}) => {
    const comicFirstImages = groupedGals.map(group => group.edges[0])
    const listOfImageLists = groupedGals
    return(
        <Grid>
            {comicFirstImages.map(image => 
                <Img key={image.node.childImageSharp.fluid.src} fluid={image.node.childImageSharp.fluid} /> 
            )}
        </Grid>
    )
}


export default Comicbox
