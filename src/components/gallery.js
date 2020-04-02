import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Lightbox } from 'react-modal-image';
import '@reach/dialog/styles.css';

const LightBoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .6rem;
    `;

const PreviewButton = styled.div`
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

export default class Gallery extends Component {
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
          <Lightbox
            hideDownload={true}
            hideZoom={true}
            large={selectedImage.node.publicURL}
            onClose={()=> this.setState({ showLightbox: false })}
          />

        )}
      </Fragment>
    );
  }
}