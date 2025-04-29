import React, { useState } from 'react';
function TodoItem(props) {
  return (
    <div>
      <div>
        <span style={props.completeList.includes(props.text) ? { textDecoration: 'line-through' } : {}}>
          {props.text}{' '}
        </span>
        <button
          //filter함수의 경우 아직 이해 필요
          onClick={() => {
            console.log(props.i);
            props.setTodoList(props.todoList.filter((_, index) => index !== props.i));
            props.setCompleteList(props.completeList.filter((item) => item !== props.text));
            props.setUncompleteList(props.uncompleteList.filter((item) => item !== props.text));
          }}
        >
          삭제
        </button>
        <button
          onClick={() => {
            if (!props.completeList.includes(props.text)) {
              props.setCompleteList([...props.completeList, props.text]);
              console.log(props.completeList);
              props.setUncompleteList(props.uncompleteList.filter((item) => item !== props.text));
            } else {
              alert('이미 완룍한 작업입니다.');
            }
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
