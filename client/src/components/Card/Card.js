import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faClock, faCalendarAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import styles from './Card.module.scss'
import axios from 'axios'

const Card = ({exercise}) => {

    const deleteExercise = () => {
        axios.delete(`/exercises/${exercise._id}`)
            .then(res => console.log(res))

            // window.location = '/'
    }

    return (
        <div className={styles.wrapper}>
            <Link to={"/edit/" + exercise._id} className={styles.container}>
                <div className={styles.card}>
                    <FontAwesomeIcon size="2x" color="#D03054" icon={faRunning}/>
                    <div className={styles.inner_card}>
                        <span className={styles.inner_card_value}>{exercise.description}</span>
                        <span className={styles.inner_card_desc}>Description</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <FontAwesomeIcon size="2x" color="#D03054" icon={faClock}/>
                    <div className={styles.inner_card}>
                        <span className={styles.inner_card_value}>{exercise.duration}</span>
                        <span className={styles.inner_card_desc}>Time</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <FontAwesomeIcon size="2x" color="#D03054" icon={faCalendarAlt}/>
                    <div className={styles.inner_card}>
                        <span className={styles.inner_card_value}>{exercise.date.substring(0,10)}</span>
                        <span className={styles.inner_card_desc}>Date</span>
                    </div>
                </div>
            </Link>
            
            <div onClick={deleteExercise} className={styles.trash}>
                <FontAwesomeIcon size="2x" color="#D03054" icon={faTrashAlt}/>
            </div>

        </div>
    )
}

export default Card
