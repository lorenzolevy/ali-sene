import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import BackArrow from './back-arrow'
import FsLightbox from 'fslightbox-react'
import Grid from './grid'
import Tile from './tile'
import StyledImg from './gallery-img'


export default class Gallery extends Component {
  static propTypes = {
    galImages: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
      imageIndex : 0,
  };
}


  render() {
    const { galImages } = this.props;
    const { showLightbox, imageIndex } = this.state;
    return (
     <Fragment>
       <BackArrow />
      <Grid>
        {galImages.map((image, index) => (
         <Tile
            key={image.node.childImageSharp.fluid.src}
            onClick={() => this.setState({ showLightbox: !showLightbox, imageIndex: index })}
            >
            <StyledImg fluid={image.node.childImageSharp.fluid} />
         </Tile>
        ))}
      </Grid>
      <FsLightbox
        toggler={showLightbox}
        sources={galImages.map(image=>image.node.publicURL)}
        sourceIndex={imageIndex}
        loadOnlyCurrentSource={true}
        />
      
      </Fragment>
    );
  }
}
