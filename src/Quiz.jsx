import React, { useState } from 'react';
import './Quiz.css';

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'Berlin', isCorrect: false },
            { answerText: 'Madrid', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Lisbon', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the name of earths imaginary middle line?',
        answerOptions: [
            { answerText: 'Equator', isCorrect: true },
            { answerText: 'Middle line', isCorrect: false },
            { answerText: 'Mediteranian', isCorrect: false },
            { answerText: 'Kenya', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the name of the president of Kenya?',
        answerOptions: [
            { answerText: 'Wilfred Mutua', isCorrect: false },
            { answerText: 'Joe Biden', isCorrect: false },
            { answerText: 'William Ruto', isCorrect: false },
            { answerText: 'Zakayo', isCorrect: true },
        ]
    },
    {

        questionText: 'What is the largest land mammal?',
        answerOptions: [
            { answerText: 'Dog', isCorrect: false },
            { answerText: 'Elephant', isCorrect: true },
            { answerText: 'Rhino', isCorrect: false },
            { answerText: 'Lion', isCorrect: false },
        ]
    },
    {
        questionText: 'What is the most important rule on the road?',
        answerOptions: [
            { answerText: 'The sign in front of you', isCorrect: true },
            { answerText: 'Slow down sign', isCorrect: false },
            { answerText: 'Caution sign', isCorrect: false },
            { answerText: 'Stop sign', isCorrect: false },
        ]
    },
    {
        questionText: 'What was the first to be created according to the Bible?',
        answerOptions: [
            { answerText: 'Birds', isCorrect: false },
            { answerText: 'Day and Night', isCorrect: true },
            { answerText: 'Plants', isCorrect: false },
            { answerText: 'Man', isCorrect: false },
        ]
    },
    {
        questionText: 'What was the fastest land animal?',
        answerOptions: [
            { answerText: 'Cow', isCorrect: false },
            { answerText: 'Hippopotamus', isCorrect: false },
            { answerText: 'Horse', isCorrect: false },
            { answerText: 'Cheetah', isCorrect: true },
        ]
    },
    {
        questionText: 'Which is the largest desert in the world?',
        answerOptions: [
            { answerText: 'Kalahari', isCorrect: false },
            { answerText: 'Gobi', isCorrect: false },
            { answerText: 'Sahara', isCorrect: false },
            { answerText: 'Namib', isCorrect: true },
        ]
    },
    {
        questionText: 'Which is the smallest continent in the World?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Australia', isCorrect: true },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'America', isCorrect: false  },
        ]
    },
    // Add more questions here
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='quiz'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
