import React, { useEffect, useState } from 'react';
function QuestionData(props) {
  const ChangeAnswr = (e) => {
    props.setNowAnswerValue(e.target.value);
  };

  function nextPage() {
    if (props.nowQuizNum < props.quizList.length - 1) {
      props.setNowQuizNum((prev) => prev + 1);
      props.setTimer(5);
    } else {
      alert('문제가 끝났습니다. 결과화면으로 넘어갑니다.');
      props.setIsDone(true);
    }
  }

  useEffect(() => {
    if (props.timer < 0) {
      if (props.nowAnswerValue == props.quizList[props.nowQuizNum].answer) {
        props.setIsAnswer((prev) => [...prev, props.nowAnswerValue]);
      }
      if (props.nowQuizNum < props.quizList.length - 1) {
        nextPage();
        return;
      } else {
        alert('문제가 끝났습니다. 결과화면으로 넘어갑니다.');
        props.setIsDone(true);
      }

      return;
    }

    let counter = setTimeout(() => props.setTimer((prev) => prev - 1), 1000);

    return () => clearTimeout(counter);
  }, [props.timer]);

  useEffect(() => {
    console.log('현재까지 맞춘 답:', props.isAnswer);
  }, [props.isAnswer]);

  return (
    <div>
      {Object.entries(props.questionList[props.nowQuizNum]).map(([key, value]) => {
        return (
          <div key={key}>
            <input type="radio" name="answer_select" value={value} onChange={ChangeAnswr} />
            <span>{value}</span>
          </div>
        );
      })}
      <p>{props.timer < 0 ? 5 : props.timer}초 남았습니다.</p>
      <p>현재 고른 답 : {props.nowAnswerValue}</p>
      <button onClick={nextPage}>다음</button>
    </div>
  );
}

export default QuestionData;
