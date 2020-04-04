import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import FsLightbox from 'fslightbox-react'
import Grid from './grid'
import Tile from './tile'

import VideoJSON from "../content/video-data.json"

export default class VideoGallery extends Component {
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
    // Transform JSON OBJ based data into an array of sourceStrings
    const videoList = VideoJSON.videos.map((video)=>video.video)
    const { galImages } = this.props;
    const { showLightbox, imageIndex } = this.state;
    
    return (
     <Fragment>
      <Grid>
        {galImages.map((image, index) => (
         <Tile
            key={image.node.childImageSharp.fluid.src}
            type="button"
            onClick={() => this.setState({ showLightbox: !showLightbox, imageIndex: index })}
            >
            <Img fluid={image.node.childImageSharp.fluid} />
         </Tile>
        ))}
      </Grid>
      <FsLightbox
        toggler={showLightbox}
        sources={videoList}
        sourceIndex={imageIndex}
        loadOnlyCurrentSource={true}
        />
      
      </Fragment>
    );
  }
}
