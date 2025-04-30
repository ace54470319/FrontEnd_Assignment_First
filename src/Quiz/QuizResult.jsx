import React, { useEffect, useState } from 'react';
function QuizResult(props) {
  function ReStart() {
    props.setIsDone(false);
    props.setNowQuizNum(0);
    props.setIsAnswer([]);
    props.setTimer(5);
    props.setNowAnswerValue(null);
  }
  return (
    <div>
      <p>당신의 정답률</p>
      <p>
        {props.isAnswer.length} / {props.quizList.length}
      </p>
      <button onClick={ReStart}>다시시작</button>
    </div>
  );
}

export default QuizResult;
