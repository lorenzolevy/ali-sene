import styled from "styled-components"
import Img from "gatsby-image"

const StyledImg = styled(Img)`
transition: transform 1s filter 0.35s!important;
&:hover {
  transform: scale(1.1);
  filter: saturate(1.5);
  
}
`

export default StyledImg