import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'
import styled from "styled-components"

const TopRight = styled.div`
    position: absolute;
    top:155px;
    right:0;
    padding-top: 1rem;
    padding-right: .5rem;
`

const Socials = () => (
    <TopRight>
        <a href="https://www.instagram.com/artsyali_/">
            <FontAwesomeIcon icon={["fab", "instagram"]} style={{marginRight: ".7rem"}}/>
        </a>
        <a href="mailto:alisene28@gmail.com">
            alisene28@gmail.com
            <FontAwesomeIcon icon="envelope" />
        </a>
    </TopRight>
)

export default Socials