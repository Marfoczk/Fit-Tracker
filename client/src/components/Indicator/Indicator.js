import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const StyledIndicator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    div {
        width: 2rem;
        height: 2px;
        background-color:  rgba(208, 48, 84, .3);
        margin-right: 1rem;
    }

    ${props => props.path === '/create' 
        ? `div:last-child {background-color:  rgba(208, 48, 84)}`
        : props.path === '/'
        ? `div:first-child {background-color: rgba(208, 48, 84)}` : null}

    div:last-child {
            margin-right: 0;
        }
`;

const Indicator = ({location}) => {

    return (
        <StyledIndicator path={location.pathname}>
            <div></div>
            <div></div>
        </StyledIndicator>
    )
}

export default withRouter(Indicator)
