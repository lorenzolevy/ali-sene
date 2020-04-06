import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from 'react'
import styled from "styled-components"

const StyledArrow = styled(FontAwesomeIcon)`
    font-size: 50px;
    color: hsla(287, 42%, 89%, 0.83);
    margin-bottom: .8rem;
    &:hover {
        color: hsla(287, 84%, 92%, 1);

    }
`
const StyledLink = styled(Link)`

`

const BackArrow = () => (
    <StyledLink to="/">
        <StyledArrow icon="arrow-left"/>
    </StyledLink>
)

export default BackArrow