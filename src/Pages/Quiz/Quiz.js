import React, { useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material';

import './Quiz.css'
import Questions from '../../components/Question/Questions';



const Quiz = ({ name, score, questions, setQuestions, setScore }) => {


    const [options, setOptions] = useState();
    const [currentQuest, setCurrentQuest] = useState(0)



    useEffect(() => {

        setOptions(questions && handleShuffle([questions[currentQuest]?.correct_answer, ...questions[currentQuest]?.incorrect_answers,]));


    }, [questions, currentQuest]);





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
                        <Questions

                            currentQuest={currentQuest}
                            setCurrentQuest={setCurrentQuest}
                            questions={questions}
                            options={options}
                            score={score}
                            setScore={setScore}

                            correct={questions[currentQuest]?.correct_answer}

                        />
                    </>
                ) : (
                    <CircularProgress style={{ margin: 100, color: 'inherit' }} size={150} thickness={1} />
                )
            }
        </div>
    )
}

export default Quiz