import './App.css';
import React, { useEffect, useState } from 'react';
import FilterButton from './TodoList/FilterButton';
import TodoApp from './TodoList/TodoApp';
import TodoInput from './TodoList/TodoInput';
import TodoList from './TodoList/TodoList';
import QuizApp from './Quiz/QuizApp';
import PlusMinusBtn from './PlusMinusBtn/PlusMinusBtn';

function App() {
  let [chooseQuiz, setCooseQuiz] = useState(0);

  return (
    <div className="App">
      <PlusMinusBtn></PlusMinusBtn>
    </div>
  );
}

export default App;
