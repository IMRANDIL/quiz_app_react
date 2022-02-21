import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './Questions.css'






const Questions = ({ score, questions, setQuestions, setScore, options, correct, currentQuest, setCurrentQuest }) => {

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



    return (
        <div>
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
            </div>
        </div>
    )
}

export default Questions