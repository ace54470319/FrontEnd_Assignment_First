import './App.css';
import React, { useEffect, useState } from 'react';
import FilterButton from './TodoList/FilterButton';
import TodoApp from './TodoList/TodoApp';
import PlusMinusBtn from './PlusMinusBtn/PlusMinusBtn';

import QuizApp from './Quiz/QuizApp';

function App() {
  let [chooseQuiz, setCooseQuiz] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCooseQuiz(1);
        }}
      >
        문제1
      </button>
      <button
        onClick={() => {
          setCooseQuiz(2);
        }}
      >
        문제2
      </button>
      <button
        onClick={() => {
          setCooseQuiz(3);
        }}
      >
        문제3
      </button>
      {chooseQuiz == 1 ? (
        <PlusMinusBtn></PlusMinusBtn>
      ) : chooseQuiz == 2 ? (
        <TodoApp></TodoApp>
      ) : chooseQuiz == 3 ? (
        <QuizApp></QuizApp>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
