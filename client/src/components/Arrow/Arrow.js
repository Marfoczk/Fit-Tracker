import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    display: flex;
    width: 2rem;
    min-height: 100%;

`;

function Arrow(props) {

    return (
        <StyledLink to={props.to}>A</StyledLink>
        )
}

export default Arrow
