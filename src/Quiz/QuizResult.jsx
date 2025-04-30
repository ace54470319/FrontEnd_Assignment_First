import React, { useEffect, useState } from 'react';
function QuizResult(props) {
  function ReStart() {
    props.setIsDone(false); // 퀴즈 다시 시작
    props.setNowQuizNum(0); // 문제 번호 리셋
    props.setIsAnswer([]); // 정답 리스트 리셋
    props.setTimer(5); // 타이머 리셋
    props.setNowAnswerValue(null); // 현재 고른 답 초기화
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
