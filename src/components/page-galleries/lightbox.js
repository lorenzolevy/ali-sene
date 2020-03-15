import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const LightBoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    `;

export default class Lightbox extends Component {
  static propTypes = {
    galImages: PropTypes.array.isRequired,
  }

  static state = {
      open: false,
  }

  render() {
    const { galImages } = this.props;
    return (
      <LightBoxContainer>
        {galImages.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </LightBoxContainer>
    );
  }
}