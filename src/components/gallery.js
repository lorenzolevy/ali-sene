import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

import FsLightbox from 'fslightbox-react';

const LightBoxContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 0.6rem;
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
            onClick={() => this.setState({ showLightbox: !showLightbox, imageIndex: index })}
            >
            <Img fluid={image.node.childImageSharp.fluid} />
         </PreviewButton>
        ))}
      </LightBoxContainer>
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
