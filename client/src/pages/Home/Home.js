import React from 'react'
import Card from '../../components/Card/Card'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 70%;
    padding: 0 1rem;
    margin-top: .5rem;
    max-height: 50vh;
    overflow: auto;

            /* width */
        ::-webkit-scrollbar {
        width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #888; 
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555; 
        }


    @media (max-width: 768px) {
        max-height: 50vh;
        overflow: auto;
        width: 95%;
    }
`;


// const dummyData = [
//     {
//         description: "run",
//         duration: 2,
//         date: "2020-09-18T12:29:48.849Z"
//     },
//     {
//         description: "walk",
//         duration: 20,
//         date: "2020-09-18T12:29:48.849Z"
//     },
//     {
//         description: "sprint",
//         duration: 5,
//         date: "2020-09-18T12:29:48.849Z"
//     },
//     {
//         description: "run",
//         duration: 2,
//         date: "2020-09-18T12:29:48.849Z"
//     },
//     {
//         description: "walk",
//         duration: 20,
//         date: "2020-09-18T12:29:48.849Z"
//     },
//     {
//         description: "sprint",
//         duration: 5,
//         date: "2020-09-18T12:29:48.849Z"
//     },
//     {
//         description: "run",
//         duration: 2,
//         date: "2020-09-18T12:29:48.849Z"
//     },
//     {
//         description: "walk",
//         duration: 20,
//         date: "2020-09-18T12:29:48.849Z"
//     },
//     {
//         description: "sprint",
//         duration: 5,
//         date: "2020-09-18T12:29:48.849Z"
//     },
// ]



const Home = (props) => {

    return (
        <>
            {/* <Indicator page="middle"/> */}
            <StyledWrapper>
                {props.data.map(exercise => (
                        <Card key={exercise._id} exercise={exercise}/>
                ))}
                   {/* {dummyData.map(exercise => (
                        <Card exercise={exercise}/>
                ))} */}
            </StyledWrapper>
        </>
    )
}

export default Home
