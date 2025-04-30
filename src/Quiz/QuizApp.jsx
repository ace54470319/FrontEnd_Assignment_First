import React, { useEffect, useState } from 'react';
import QuestionData from './QuestionData';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

function QuizApp() {
  const [isAnswer, setIsAnswer] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [timer, setTimer] = useState(5);
  const [nowAnswerValue, setNowAnswerValue] = useState(null);
  const quizList = [
    { quiz: '사과는 영어로?', answer: 'apple' },
    { quiz: '바나나는 영어로?', answer: 'banana' },
    { quiz: '퉁퉁... 사후르는 퉁이 몇개?', answer: 9 },
    { quiz: '트랄라렐로 트랄랄라 vs 봄바르딜로 크로코딜로', answer: '봄바르딜로 크로코딜로' },
  ];
  const questionList = [
    { 1: 'apple', 2: 'banana', 3: 'grape' },
    { 1: 'orange', 2: 'water', 3: 'banana' },
    { 1: 7, 2: 8, 3: 9 },
    { 1: '봄바르딜로 크로코딜로', 2: '트랄라렐로 트랄랄라', 3: '퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르' },
  ];
  const [nowQuizNum, setNowQuizNum] = useState(0);

  const propsState = {
    quizList,
    nowQuizNum,
    questionList,
    nowQuizNum,
    setNowQuizNum,
    isAnswer,
    setIsAnswer,
    isDone,
    setIsDone,
    timer,
    setTimer,
    nowAnswerValue,
    setNowAnswerValue,
  };
  return (
    <div>
      <QuizQuestion {...propsState}></QuizQuestion>
      {isDone == false ? <QuestionData {...propsState}></QuestionData> : <QuizResult {...propsState}></QuizResult>}
    </div>
  );
}
export default QuizApp;
