import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterButton from './FilterButton';

function TodoApp(props) {
  let [todoList, setTodoList] = useState([]);
  let [completeList, setCompleteList] = useState([]);
  let [uncompleteList, setUncompleteList] = useState([]);
  let [filternum, setFilterenum] = useState(0); //0.전체 1.완료 2.미완

  //props 묶어서 넘기는 법 / 중복되는 부분이 너무 많아서 이 부분만 물어봄
  const stateProps = {
    todoList,
    setTodoList,
    completeList,
    setCompleteList,
    uncompleteList,
    setUncompleteList,
  };

  return (
    <div>
      <TodoInput {...stateProps}></TodoInput>
      {filternum == 0 && <TodoList {...stateProps} todoList={todoList}></TodoList>}

      {filternum == 1 && <TodoList {...stateProps} todoList={completeList}></TodoList>}

      {filternum == 2 && <TodoList {...stateProps} todoList={uncompleteList}></TodoList>}

      <FilterButton setFilterenum={setFilterenum}></FilterButton>
    </div>
  );
}

export default TodoApp;
