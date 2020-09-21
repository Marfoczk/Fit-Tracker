import React from 'react'
import Day from './Date/Day'
import Logo from './Logo/Logo'
import styled from 'styled-components'

const StyledWrapper = styled.header`
    position: relative;
    width: 100vw;
    height: 30vh;
    /* background-color: #ce1c7e; */
    background-color: #d03054;
    /* background-image: radial-gradient(circle at center center, transparent,rgb(0,0,0)),linear-gradient(300deg, rgba(198, 198, 198,0.05) 0%, rgba(198, 198, 198,0.05) 50%,rgba(11, 11, 11,0.05) 50%, rgba(11, 11, 11,0.05) 100%),linear-gradient(64deg, rgba(54, 54, 54,0.05) 0%, rgba(54, 54, 54,0.05) 50%,rgba(132, 132, 132,0.05) 50%, rgba(132, 132, 132,0.05) 100%),linear-gradient(15deg, rgba(57, 57, 57,0.05) 0%, rgba(57, 57, 57,0.05) 50%,rgba(128, 128, 128,0.05) 50%, rgba(128, 128, 128,0.05) 100%),linear-gradient(332deg, rgba(97, 97, 97,0.05) 0%, rgba(97, 97, 97,0.05) 50%,rgba(85, 85, 85,0.05) 50%, rgba(85, 85, 85,0.05) 100%),linear-gradient(142deg, rgba(237, 237, 237,0.05) 0%, rgba(237, 237, 237,0.05) 50%,rgba(211, 211, 211,0.05) 50%, rgba(211, 211, 211,0.05) 100%),linear-gradient(148deg, rgba(168, 168, 168,0.05) 0%, rgba(168, 168, 168,0.05) 50%,rgba(32, 32, 32,0.05) 50%, rgba(32, 32, 32,0.05) 100%),linear-gradient(17deg, rgba(225, 225, 225,0.05) 0%, rgba(225, 225, 225,0.05) 50%,rgba(228, 228, 228,0.05) 50%, rgba(228, 228, 228,0.05) 100%),linear-gradient(5deg, rgba(104, 104, 104,0.05) 0%, rgba(104, 104, 104,0.05) 50%,rgba(43, 43, 43,0.05) 50%, rgba(43, 43, 43,0.05) 100%),radial-gradient(circle at center center, hsl(290,5%,8%),hsl(290,5%,8%)); */
    background-blend-mode: lighten;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        height: 25vh;
    }

    &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: #212A6B;
        border: 2px solid #212A6B;
        clip-path: polygon(0 75%, 100% 50%, 100% 101%, 0% 101%);
    }
`;


const Navbar = () => {
    return (
        <StyledWrapper>
            <Day/>
            <Logo/>
        </StyledWrapper>
    )
}

export default Navbar
