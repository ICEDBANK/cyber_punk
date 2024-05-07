import { useState } from 'react';
import './App.css';

function App() {

  const quizData = [
    {
      question: 'Which language runs in a web browser?',
      choices: ['Java', 'Python', 'JavaScript'],
      correctAnswer: 'JavaScript',
    },
    {
      question: 'Who is responsible for the creation of the JavaScript programming language?',
      choices: ['Larry Wall', 'Brendan Eich', 'Guido van Rossum'],
      correctAnswer: 'Brendan Eich',
    },
    {
      question: 'Who developed the React.js library for building user interfaces?',
      choices: ['Evan You', 'Jordan Walke', 'Ryan Dahl'],
      correctAnswer: 'Jordan Walke',
    },
    {
      question: 'React is an open-source JavaScript library developed by what company?',
      choices: ['Facebook', 'Microsoft', 'Google'],
      correctAnswer: 'Facebook',
    },
    {
      question: '_______ is a package manager for JavaScript programming language.',
      choices: ['cli', 'wpm', 'npm'],
      correctAnswer: 'npm',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState (0);
  const [result, setResult] = useState (false);

  const handleReloadClick = () => {
    setCurrentQuestion(0);
    setScore (0);
    setResult(false);
  };

  const chosenAnswerHandle = () => {

    if(selectedAnswer === quizData[currentQuestion].correctAnswer){

      setScore((prevScore) => prevScore + 1)

    }else {

    }

  }

  return (
    <>
      <div className="quiz-container">
        {result ? (
          <div>
            <h2>{`You Answered ${score}/${quizData.length} Questions Correctly, Congratulations`}</h2>
            <button onClick={handleReloadClick}>Try Again!</button>
          </div>
        ) : (
          <div className="quiz-question">
            <h2>{quizData[0].question}</h2>
            <ul>
              {quizData[currentQuestion].choices.map((choice, index) => (
                <li key={index} onClick={()=> {chosenAnswerHandle(choice)}}>{choice}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
