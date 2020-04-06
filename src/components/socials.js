import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'
import styled from "styled-components"

const TopRight = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    font-size: 1.3rem;
    max-width: 240px;
`
const StyledFA = styled(FontAwesomeIcon)`
    margin-right: .35rem;
    font-size: 1.1rem;
`
const StyleLink = styled.a`
    padding: .1rem;
    color: hsla(287, 42%, 89%, 0.83);
    &:hover {
        color: hsla(287, 84%, 92%, 1);

    }
`

const Socials = () => (
    <TopRight>
        <StyleLink href="https://www.instagram.com/artsyali_/">
            <StyledFA icon={["fab", "instagram"]} />
            instagram
        </StyleLink>
        <StyleLink href="mailto:alisene28@gmail.com">
            <StyledFA icon={["far", "envelope"]} />
            email
        </StyleLink>
    </TopRight>
)

export default Socials