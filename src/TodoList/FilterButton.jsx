import React, { useState } from 'react';
function FilterButton(props) {
  return (
    <div>
      <br />
      필터버튼
      <div>
        <button onClick={() => props.setFilterenum(0)}>전체</button>
        <button onClick={() => props.setFilterenum(1)}>완료</button>
        <button onClick={() => props.setFilterenum(2)}>미완료</button>
      </div>
    </div>
  );
}

export default FilterButton;
