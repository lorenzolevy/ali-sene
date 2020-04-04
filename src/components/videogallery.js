import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

import FsLightbox from 'fslightbox-react';


import VideoJSON from "../content/video-data.json"

const LightBoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .6rem;
    `;

const PreviewButton = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    > div {
        border-radius: .3rem;
    }
    > div > div {
        padding-bottom: 100%!important;
    }
  `;

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
      <LightBoxContainer>
        {galImages.map((image, index) => (
         <PreviewButton
            key={image.node.childImageSharp.fluid.src}
            type="button"
            onClick={() => this.setState({ showLightbox: !showLightbox, imageIndex: index })}
            >
            <Img fluid={image.node.childImageSharp.fluid} />
         </PreviewButton>
        ))}
      </LightBoxContainer>
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
