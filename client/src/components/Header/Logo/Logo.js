import React from 'react'
import styled from 'styled-components'
import logo from '../../../img/logo3.png'

const StyledImg = styled.img`
    position: absolute;
    width: auto;
    transform: translateY(30%);
    max-width: 60%;
    max-height: 80%;
    z-index: 100;
`;


const Logo = () => {
    return (
        <StyledImg src={logo}/>
    )
}

export default Logo
