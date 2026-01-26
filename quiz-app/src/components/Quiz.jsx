import React, { useState } from "react";
import "./Quiz.css";

function Quiz() {
  const questions = [
    {
      question: "What is HTML?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks Text Mark Language",
        "None of the above"
      ],
      correctAnswer: 0
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 0
    },
    {
      question: "What is JavaScript?",
      options: [
        "Programming Language",
        "Markup Language",
        "Styling Language",
        "Database"
      ],
      correctAnswer: 0
    },
    {
      question: "Which tag is used for React components?",
      options: ["<react>", "<component>", "<div>", "Functions/Classes"],
      correctAnswer: 3
    },
    {
      question: "Which hook is used for state in React?",
      options: ["useData", "useState", "useEffect", "useRef"],
      correctAnswer: 1
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JSON XML",
        "JavaScript Xtreme"
      ],
      correctAnswer: 0
    },
    {
      question: "Which company created React?",
      options: ["Google", "Microsoft", "Facebook", "Apple"],
      correctAnswer: 2
    },
    {
      question: "What is the default port for React?",
      options: ["3000", "8080", "4200", "5000"],
      correctAnswer: 0
    },
    {
      question: "Which keyword is used to declare variables in JS?",
      options: ["var", "let", "const", "All of the above"],
      correctAnswer: 3
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Method",
        "Digital Object Model",
        "Desktop Oriented Mode"
      ],
      correctAnswer: 0
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-wrapper">
      <h1 className="quiz-title">Quiz App</h1>

      <div className="quiz-container">
        {showResult ? (
          <div className="result">
            <h2>Quiz Completed 🎉</h2>
            <p>
              Your Score: <strong>{score}</strong> / {questions.length}
            </p>
            <button className="btn" onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="question-container">
              <span className="question-count">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <h2 className="question-text">
                {questions[currentIndex].question}
              </h2>
            </div>

            <div className="option-container">
              {questions[currentIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`option ${
                    selectedOption === index ? "selected" : ""
                  }`}
                  onClick={() => setSelectedOption(index)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="buttons">
              <button
                className="btn next"
                onClick={handleNext}
                disabled={selectedOption === null}
              >
                {currentIndex === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
