import React from 'react'
import styled from 'styled-components'
import footer from '../../img/footer3.png'

const StyledFooter = styled.footer`
    /* position: relative; */
    margin-top: auto;
    text-align: center;
    /* color: #F7F7F8; */

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 2vh;
        background-color: #d03054;
    
        @media (max-width: 600px) {
            display: none;
        }
    }

    img {
        display: none;
        transform: translateY(12%);
        width: 30%;

        @media (max-width: 600px) {
            display: block;
            width: 80%;
        }
    }


    /* svg {
        transform: translateY(30%);
        width: 25%;
        height: auto;    
        fill: #F7F7F8;
        
        @media (max-width: 768px) {
            width: 80%;
        }
    } */
`;

const Footer = () => {
    return (
        <StyledFooter>
            <img src={footer} alt="footer-img"/>
        </StyledFooter>
    )
}

export default Footer


// SVG from:
// https://svgsilh.com/image/1975689.html