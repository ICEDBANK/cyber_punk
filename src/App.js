// Import the useState hook from React and the CSS file
import { useState } from 'react';
import './App.css';

// Define the functional component App
function App() {
  // Array containing quiz questions, choices, and correct answers
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

  // State variables to track current question, score, and quiz result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  // Function to handle click event for reload button
  const handleReloadClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setResult(false);
  };

  // Function to handle selection of an answer
  const chosenAnswerHandle = (selectedAnswer) => {
    // Check if selected answer is correct and update score
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    // Move to the next question or show result if it's the last question
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setResult(true);
    }
  };

  // JSX markup for rendering the quiz component
  return (
    <>
      <div className="quiz-container">
        {result ? (
          // Show quiz result and reload button if quiz is completed
          <div>
            <h2>{`You Answered ${score}/${quizData.length} Questions Correctly, Congratulations`}</h2>
            <button onClick={handleReloadClick}>Try Again!</button>
          </div>
        ) : (
          // Show current question and choices if quiz is ongoing
          <div className="quiz-question">
            <h2>{quizData[currentQuestion].question}</h2>
            <ul>
              {quizData[currentQuestion].choices.map((choice, index) => (
                <li key={index} onClick={() => { chosenAnswerHandle(choice) }}>{choice}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

// Export the App component
export default App;
