import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Quiz.css"

function Quiz() {
  const [surahs, setSurahs] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/surahs')
      .then(response => {
        setSurahs(response.data);
        generateNewQuestion(response.data);
      })
      .catch(error => {
        console.error('Error fetching surah data:', error);
      });
  }, []);

  const generateNewQuestion = (surahList) => {
    if (surahList.length > 0) {
      const randomIndex = Math.floor(Math.random() * surahList.length);
      const selectedSurah = surahList[randomIndex];

      const questionTypes = [
        { key: 'englishName', text: 'What is the English name of Surah' },
        { key: 'englishNameTranslation', text: 'What is the English translation of Surah' },
        { key: 'numberOfAyahs', text: 'How many Ayahs does Surah' },
        { key: 'revelationType', text: 'Where was Surah revealed' }
      ];
      const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

      const incorrectAnswers = [];
      while (incorrectAnswers.length < 3) {
        const randomSurah = surahList[Math.floor(Math.random() * surahList.length)];
        if (randomSurah._id !== selectedSurah._id && !incorrectAnswers.includes(randomSurah[questionType.key])) {
          incorrectAnswers.push(randomSurah[questionType.key]);
        }
      }

      setCurrentQuestion({
        questionText: `${questionType.text} "${selectedSurah.name}"?`,
        correctAnswer: selectedSurah[questionType.key],
        options: shuffleOptions([selectedSurah[questionType.key], ...incorrectAnswers]),
      });
    }
  };

  const shuffleOptions = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex < 5) {
      setQuestionIndex(nextQuestionIndex);
      generateNewQuestion(surahs);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h2>Surah Quiz</h2>
      {showScore ? (
        <div>
          <h3>Quiz Finished!</h3>
          <p>Your Score: {score} / 5</p>
        </div>
      ) : (
        currentQuestion && (
          <div>
            <p>{currentQuestion.questionText}</p>
            <div>
              {currentQuestion.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Quiz;
