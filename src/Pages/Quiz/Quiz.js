import React, { useEffect, useState } from 'react'





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
        <div>
            <span className='subtitle'>
                Welcome, {name}
            </span>
        </div>
    )
}

export default Quiz