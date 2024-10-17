import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Quiz.css";

function Quiz({userAuth}) {
  const [surahs, setSurahs] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userScore, setUserScore] = useState(null);
  const [userName, setUserName] = useState(null);

 
  useEffect(() => {
    axios.get('http://localhost:8080/surahs')
      .then(response => {
        console.log("reqeust work")
        setSurahs(response.data);
        generateNewQuestion(response.data);
      })
      .catch(error => {
        console.error('Error fetching surah data:', error);
      });
  }, []);

  const generateNewQuestion = (surahList) => {
    console.log("generate questions")
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
      for(let i =0;i<3;i++){console.log("loop")
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
    return options.sort(() => Math.random() - 1);
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

  
  const saveScore = () => {

    console.log(userAuth)
    axios.put(`http://localhost:8080/users/${userAuth.currentUser.uid}/score`, {
      score: score,
    })
      .then(response => {
        console.log("user profile :",response.data)
      })
      .catch(error => {
        console.error('Error updating score:', error);
      });
    };
    
    useEffect(() => {
      if (showScore) {
        saveScore(); 
      }
    }, [showScore]);
    
    const refreshPage = () => {
      window.location.reload();
    };
    
    const fetchUserScore = async () => {
      axios.get(`http://localhost:8080/users/${userAuth.currentUser.uid}`)
      .then(response => {
        console.log("test",response)
        setUserName(response.data.username)
        setUserScore(response.data.score);
      })
      .catch(error => {
        console.error('Error fetching user score:', error);
      });
  };
  console.log(userScore)
  useEffect(()=>{
    if(userAuth){

      fetchUserScore();
    }

  },[userAuth])
  return (
    <div className="Quiz">
      <div className='quizStart'>
      <ul>Surah Quiz :</ul>
      {showScore ? (
        <div>
          <li>Quiz Finished!</li>
          <li>Your Score:<span> {score} / 5</span></li>
          <button onClick={refreshPage}>Retry Quiz</button>
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
    <div className="userProfile">
      <ul>User  Profile :</ul>
      <li> Username : <span>{userName}</span> </li>
      <li>Totale Score : <span>{userScore}</span> </li>
    </div>
    </div>
  );
}

export default Quiz;
