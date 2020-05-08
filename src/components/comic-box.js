import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FsLightbox from 'fslightbox-react'
import Grid from './grid'
import Tile from './tile'
import StyledImg from './gallery-img'

export default class Gallery extends Component {
  static propTypes = {
    groupedGals: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      toggler: false,
      imageIndex : 0,
  };
}


  render() { 
    const { groupedGals }  = this.props;
    const comicFirstImages = groupedGals.map(group=> group.edges[0])
    const galsList  = groupedGals.map(group=> group.edges.map(image => image.node.publicURL))
    const { toggler, imageIndex } = this.state;
    return (
    <section>
      <Grid>
        {comicFirstImages.map((image, index) => (
         <Tile
            key={image.node.childImageSharp.fluid.src}
            onClick={() => this.setState({ imageIndex: index, toggler: !toggler })}
            >
            <StyledImg fluid={image.node.childImageSharp.fluid} />
         </Tile>
        ))}
      </Grid>
      <FsLightbox
        toggler={toggler}
        sources={galsList[imageIndex]}
        key={imageIndex}
        />
    </section>
    );
  }
  
}

