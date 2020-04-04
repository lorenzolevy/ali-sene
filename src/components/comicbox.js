import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';

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
    cursor: pointer;
    > div {
        border-radius: .3rem;
    }
    > div > div {
        padding-bottom: 100%!important;
    }
  `;

export default class Gallery extends Component {
  static propTypes = {
    groupedGals: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
      imageIndex : 0,
  };
}


  render() { 
    const { groupedGals } = this.props;
    const comicFirstImages = groupedGals.map(group=> group.edges[0])
    const { showLightbox, imageIndex } = this.state;
    return (
    <div>
      <LightBoxContainer>
        {comicFirstImages.map((image, index) => (
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
        sources={groupedGals[imageIndex].edges.map(image => image.node.publicURL)}
        key={imageIndex}
        disableLocalStorage={true}
        />
    </div>
    );
  }
  
}

