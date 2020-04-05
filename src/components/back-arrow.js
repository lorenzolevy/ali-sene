import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from 'react'

const BackArrow = () => (
    <Link to="/">
        <FontAwesomeIcon icon="arrow-left"/>
    </Link>
)

export default BackArrow