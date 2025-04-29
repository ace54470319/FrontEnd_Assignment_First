import './App.css';
import React, { useEffect, useState } from 'react';

import TodoApp from './TodoList/TodoApp';

function App() {
  let [chooseQuiz, setCooseQuiz] = useState(0);

  return (
    <div className="App">
      <TodoApp></TodoApp>
    </div>
  );
}

export default App;
