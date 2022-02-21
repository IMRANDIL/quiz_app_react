import React, { useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material';

import './Quiz.css'



const Quiz = ({ name, score, questions, setQuestions, setScore }) => {


    const [options, setOptions] = useState();
    const [currentQuest, setCurrentQuest] = useState(0)



    useEffect(() => {

        setOptions(questions && handleShuffle([questions[currentQuest]?.correct_answer, ...questions[currentQuest]?.incorrect_answers,]));


    }, [questions, currentQuest]);

    console.log(options);



    const handleShuffle = (option) => {
        return option.sort(() => Math.random() - 0.5);
    }





    return (
        <div className='quiz'>
            <span className='subtitle'>
                Welcome, {name}
            </span>
            {
                questions ? (
                    <>
                        <div className="quizInfo">
                            <span>{questions[currentQuest].category}</span>
                            <span>Score : {score}</span>
                        </div>
                    </>
                ) : (
                    <CircularProgress style={{ margin: 100, color: 'inherit' }} size={150} thickness={1} />
                )
            }
        </div>
    )
}

export default Quiz