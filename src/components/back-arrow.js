import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from 'react'
import styled from "styled-components"

const StyledArrow = styled(FontAwesomeIcon)`
    font-size: 34px;
    color: hsla(287, 42%, 89%, 0.83);
    margin-bottom: .6rem;
    &:hover {
        color: hsla(287, 84%, 92%, 1);

    }
`
const StyledLink = styled(Link)`
    align-self: flex-end;
`

const BackArrow = () => (
    <StyledLink to="/">
        <StyledArrow icon="arrow-left"/>
    </StyledLink>
)

export default BackArrow