import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import Video from "./video"
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

export default class Lightbox extends Component {
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
      <LightBoxContainer>
        {galImages.map((image, index) => (
         <PreviewButton
            key={image.node.childImageSharp.fluid.src}
            type="button"
            onClick={() => this.setState({ showLightbox: true, imageIndex: index })}
            >
            <Img fluid={image.node.childImageSharp.fluid} />
         </PreviewButton>
        ))}
      </LightBoxContainer>
        {showLightbox && (
        <Dialog allowPinchZoom={true} onDismiss={() => this.setState({ showLightbox: false })}>
          <button type="button" onClick={() => this.setState({ showLightbox: false })}>
            Close
          </button>
        <Video videoTitle={imageIndex} videoSrcURL={VideoJSON.videos[imageIndex].video} />
        </Dialog>
        )}
      </Fragment>
    );
  }
}

console.log(VideoJSON.videos[0].video);

