import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './Questions.css'






const Questions = ({ score, questions, setScore, options, correct, currentQuest, setCurrentQuest }) => {
    const navigate = useNavigate();

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);


    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return 'select'
        }
        else if (selected === i && selected !== correct) {
            return 'wrong'
        } else if (i === correct) {
            return 'select'
        }
    }



    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false)
    }






    const handleQuit = () => {

    }



    const handleNext = () => {
        if (currentQuest > 8) {
            navigate('/result')
        } else if (selected) {
            setCurrentQuest(currentQuest + 1);
            setSelected()
        } else {
            setError('Please Select An Option First')
        }
    }






    return (
        <div className='question'>
            <h1>Question {currentQuest + 1}</h1>

            <div className="singleQuestion">
                <h2>{questions[currentQuest].question}</h2>
                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    {
                        options &&
                        options.map((i, index) => {
                            return (
                                <button key={index} onClick={() => handleCheck(i)}

                                    className={`singleOption ${selected && handleSelect(i)}`}
                                    disabled={selected}
                                >

                                    {i}</button>
                            )

                        })
                    }
                </div>
                <div className="controls">
                    <Button variant='contained' color='secondary' size='large' style={{ width: 185 }} href='/' onClick={handleQuit}>Quit</Button>
                    <Button variant='contained' color='primary' size='large' style={{ width: 185 }} onClick={handleNext}>Next Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Questions