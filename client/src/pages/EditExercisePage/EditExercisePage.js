import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


const StyledWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
`;

const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;

    label {
        color: #d03054;
        margin-bottom: .4rem;
    }
    input {
        border: none;
        outline: none;
        padding: .4rem;
        background-color: rgba(255,255,255,0.1);
        color: white;
    }
`;

const StyledGroupForm = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        .react-datepicker__tab-loop {
            z-index: 1000;
        }
`;

const StyledButton = styled.button`
        margin: 1rem 0;
        background-color:#d03054;
        outline: none;
        border: none;
        padding: .5rem;
        color: white; 
        font-family: 'Anton', sans-serif;
        cursor: pointer;

        &:hover {
            border: 1px solid white inset;
            background-color:hsl(347, 63%, 60%);
        }
`;

const StyledLink = styled(Link)`
    color: white;
    margin-right: 4rem;
    /* position: absolute; */
    /* top: -1rem; */
    /* left: -3rem; */
`;


const EditExercisePage = (props) => {

    const location = window.location.href;

    useEffect(() => {

        if (location.includes('local')) {
            axios.get(`http://localhost:5000/exercises/${props.match.params.id}`)
                .then(res => {
                    setUsername(res.data.username)
                    setDescription(res.data.description);
                    setDuration(res.data.duration);
                    setDate(new Date(res.data.date))
                })
        } else {
            axios.get(`/exercises/${props.match.params.id}`)
                .then(res => {
                    setUsername(res.data.username)
                    setDescription(res.data.description);
                    setDuration(res.data.duration);
                    setDate(new Date(res.data.date))
                })
        }
    }, [])

    const [username, setUsername] = useState('mrf');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());

    function handleDescriptionChange(e) {
        setDescription(e.target.value.toUpperCase());
    }
    function handleDurationChange(e) {
        setDuration(e.target.value.toUpperCase());
    }
    function handleDateChange(e) {
        setDate(e);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const exercise = {
            username,
            description,
            duration,
            date
        }


        if (location.includes('local')) {
            axios.post(`http://localhost:5000/exercises/update/${props.match.params.id}`, exercise)
        } else {
            axios.post(`/exercises/update/${props.match.params.id}`, exercise)
            .then(res => console.log(res.data))
        }
        
        /* DEVELOPMENT */
        // axios.post(`http://localhost:5000/exercises/update/${props.match.params.id}`, exercise)
        
        /* PRODUCTION */
        // axios.post(`/exercises/update/${props.match.params.id}`, exercise)
        //     .then(res => console.log(res.data))

        window.location = '/';

    }


    return (
        <>
            <StyledWrapper>
                <StyledLink to='/'>
                    <FontAwesomeIcon size="3x" icon={faArrowCircleLeft} />
                </StyledLink>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledGroupForm>
                        <label>Description</label>
                        <input 
                            type="text"
                            required
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </StyledGroupForm>
                    <StyledGroupForm>
                        <label>Duration (in minutes)</label>
                        <input 
                            type="number"
                            required
                            value={duration}
                            onChange={handleDurationChange}
                        />
                    </StyledGroupForm>
                    <StyledGroupForm>
                        <label>Date</label>
                        <DatePicker
                            dateFormat='dd/MM/yyyy'
                            selected={date}
                            onChange={handleDateChange}
                        />
                    </StyledGroupForm>
                    <StyledButton type="submit">Edit Exercise</StyledButton>
                </StyledForm>
            </StyledWrapper>
        </>
    )
}

export default EditExercisePage
