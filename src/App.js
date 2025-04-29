import './App.css';
import React, { useEffect, useState } from 'react';
import TodoApp from './TodoList/TodoApp';
import TodoList from './TodoList/TodoList';
function App() {
  let [chooseQuiz, setCooseQuiz] = useState(0);

  return (
    <div className="App">
      <TodoApp></TodoApp>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
