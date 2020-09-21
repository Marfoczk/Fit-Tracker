import React from 'react'
import styled from 'styled-components'


const StyledDate = styled.div`
    position: relative;
    /* top: 20px; */
    display: flex;
    color: #F7F7F8;
    font-family: 'BlackBison', sans-serif;
    align-items: flex-end;
    z-index: 99;
    transform: translateY(-30%);

    div:first-child {
        span{
        display: flex;
        line-height: 86px;
        font-size: 6rem;
        }
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        align-self: flex-start;

        span:first-child {
            margin-top: 6px;
            line-height: 48px;
            font-size: 3rem; 
        }
        span:last-child {
            line-height: 24px;
            font-size: 1.5rem;
        }
    }
`;


const Day = () => {

    const toTwoDigits = (num) => num < 10 ? `0${num}` : num;

    let date = new Date();
    const day = toTwoDigits(date.getDate());
    const month = toTwoDigits(date.getMonth() + 1);
    const year = date.getFullYear();



    return (

        <StyledDate>
            <div>
                <span>{day}</span>
            </div>
            <div>            
                <span>{month}</span>
                <span>{year}</span>
            </div>
        </StyledDate>
    )
}

export default Day


// FONT 
// license: Freeware, Non-Commercial
// link: https://www.fontspace.com/black-bison-font-f48434