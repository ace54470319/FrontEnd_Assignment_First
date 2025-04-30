import React, { useEffect, useState } from 'react';
function QuizQuestion(props) {
  return (
    <div>
      <span>
        현재 문제 : {props.quizList[props.nowQuizNum].quiz} ({props.nowQuizNum + 1} / {props.quizList.length})
      </span>
    </div>
  );
}

export default QuizQuestion;
