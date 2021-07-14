import React from 'react';
import classes from './FinishedQuiz.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    hhh
                    <FontAwesomeIcon className={classes.faTimes} icon={faTimes} />
                </li>
                <li>
                    <strong>2. </strong>
                    hhh
                    <FontAwesomeIcon className={classes.faCheck} icon={faCheck} />
                </li>
            </ul>

            <p> Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz