import React, { useEffect, useState } from 'react';

//1번문제의 경우 GPT 사용 횟수 : 0
function PlusMinusBtn(props) {
  let [count, setCount] = useState(0);
  return (
    //<></> <-- 삼항연산자에서 조건에 안맞으면 아무행동도 안하는거 몰라서, 프래그먼트 사용 --> 프래그먼트 말고 아무 동작도 안하는 코드가 있을까? ->찾아봐야함
    <div>
      <button onClick={() => (count - 1 >= 0 ? setCount(count - 1) : <></>)}>-</button>
      <div style={count % 2 == 0 ? { color: 'blue' } : { color: 'red' }}>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default PlusMinusBtn;
