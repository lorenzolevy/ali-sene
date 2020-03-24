import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const LightBoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    `;

const PreviewButton = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
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
  };
}

  render() {
    const { galImages } = this.props;
    const { selectedImage, showLightbox } = this.state;
    
    return (
     <Fragment>
      <LightBoxContainer>
        {galImages.map(image => (
         <PreviewButton
            key={image.node.childImageSharp.fluid.src}
            type="button"
            onClick={() => this.setState({ showLightbox: true, selectedImage: image })}
            >
            <Img fluid={image.node.childImageSharp.fluid} />
         </PreviewButton>
        ))}
      </LightBoxContainer>
        {showLightbox && (
        <Dialog allowPinchZoom={true} onDismiss={() => this.setState({ showLightbox: false })}>
          <Img fluid={selectedImage.node.childImageSharp.fluid} />
          <button type="button" onClick={() => this.setState({ showLightbox: false })}>
            Close
          </button>
        </Dialog>
        )}
      </Fragment>
    );
  }
}