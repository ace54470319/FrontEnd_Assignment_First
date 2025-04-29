import React, { useState } from 'react';

function TodoInput(props) {
  const [textvalue, setTextvalue] = useState('');
  return (
    <div>
      <p>할일을 적으시오</p>
      <input type="text" onChange={(e) => setTextvalue(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          if (!props.todoList.includes(textvalue) && textvalue) {
            props.setTodoList([...props.todoList, textvalue]);
            props.setUncompleteList([...props.uncompleteList, textvalue]);
          } else {
            alert('이미 할일에 포함되어있거나 입력이 공백입니다.');
          }
        }}
      >
        확인
      </button>
    </div>
  );
}
export default TodoInput;
