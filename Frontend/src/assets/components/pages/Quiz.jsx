import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Quiz.css"

function Quiz() {
    const [surahs, setSurahs] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/surahs')
            .then(response => {
                console.log(response.data)
                setSurahs(response.data);
            })
            .catch(error => {
                console.error('Error fetching Surah data:', error);
            });
    }, []);

    if (surahs.length === 0) {
        return <div>Loading...</div>;
    }

    
    const currentQuestion = surahs[questionIndex];
    const handleAnswer = (correct) => {
        if (correct) {
            setScore(score + 1);
        }
        setQuestionIndex(questionIndex + 1);
    };

    return (
        <div>
            <h2>Surah Quiz</h2>
            {questionIndex < 5 ? (
                <div>
                    <p>What is the Arabic name of the Surah "{currentQuestion.name}"?</p>
                    <button onClick={() => handleAnswer(true)}>{currentQuestion.englishName}</button>
                    <button onClick={() => handleAnswer(false)}>Wrong Answer</button>
                    <button onClick={() => handleAnswer(false)}>Wrong Answer</button>
                    <button onClick={() => handleAnswer(false)}>Wrong Answer</button>
                </div>
            ) : (
                <div>
                    <h3>Quiz Finished!</h3>
                    <p>Your Score: {score} / {5}</p>
                </div>
            )}
        </div>
    );
}

export default Quiz;
