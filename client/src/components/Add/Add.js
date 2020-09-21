import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledAdd = styled(FontAwesomeIcon)`
    position: fixed;
    bottom: 10%;
    right: 5%;
    color: #F7F7F8;

    &:hover {
        color: #d03054;
    }

    &:active {
        color: #d03054;
    }
`;

const Add = ({location}) => {

    return (
        location.pathname === '/create' ? null : 
        <Link to={'/create'}>
            <StyledAdd size="4x" icon={faPlusCircle}/>
        </Link>
    )
}

export default withRouter(Add)
