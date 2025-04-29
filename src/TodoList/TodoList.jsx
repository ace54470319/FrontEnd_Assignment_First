import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const list = Array.isArray(props.todoList) ? props.todoList : [];
  return (
    <div>
      {list.map((item, i) => (
        <TodoItem key={i} i={i} text={item} {...props} />
      ))}
    </div>
  );
}

export default TodoList;
