## Problem 1 - 카운터 앱

### 요구사항

- 버튼을 누르면 1씩 증가
- 버튼을 누르면 1씩 감소 (단, 0보다 작아지지 않음)
- 현재 값이 짝수일 경우 텍스트 색상은 파란색, 홀수일 경우 빨간색으로 표시

### 작업 과정

1. Plus/Minus 버튼 및 count를 표시할 요소 생성
2. `useState`를 활용해 count 상태값 생성
3. 버튼 클릭 시 `onClick` 이벤트로 증가/감소 처리
4. 0보다 작아지지 않도록 조건문 추가
5. count 값에 따라 텍스트 색상 동적 적용 (`count % 2 === 0`)

---

## Problem 2 - Todo 리스트 앱

### 요구사항

- 할 일을 입력하고 리스트에 추가
- 각 항목에 대해 완료/삭제 버튼 제공
- 완료된 항목은 텍스트에 취소선 적용
- 전체/미완료/완료 보기 필터 버튼 제공

### 작업 과정

1. 컴포넌트 구조 설계
   - `TodoList/FilterButton.jsx`
   - `TodoList/TodoApp.jsx`
   - `TodoList/TodoInput.jsx`
   - `TodoList/TodoItem.jsx`
   - `TodoList/TodoList.jsx`
2. `useState`로 전체 리스트, 완료 리스트, 미완료 리스트 상태 관리
3. `filterNum`을 활용해 필터 상태(전체/완료/미완료) 관리
4. `TodoInput`에서 입력된 텍스트를 리스트에 추가
   - 공백이거나 중복된 항목은 추가하지 않음
5. `TodoItem`에서 완료 버튼 클릭 시 취소선 스타일 적용 및 리스트 이동 처리
6. 삭제 버튼 클릭 시 모든 리스트에서 해당 항목 제거
7. `FilterButton`을 통해 필터링 상태를 변경하고 `TodoList`에 전달하여 조건부 렌더링

---

## Problem 3 - 퀴즈 앱

### 요구사항

- 3개의 퀴즈 문제 제공
- 보기 중 하나를 선택하면 즉시 정답 여부 확인 후 다음 문제로 이동
- 모든 문제를 풀면 결과 화면에서 점수(맞춘 개수) 출력

### 작업 과정

1. 컴포넌트 구조 설계
   - `Quiz/QuizApp.jsx`
   - `Quiz/QuizQuestion.jsx`
   - `Quiz/QuestionData.jsx`
   - `Quiz/QuizResult.jsx`
2. `QuizApp`에서 문제 및 보기 데이터를 정의하고 하위 컴포넌트에 전달
3. `QuizQuestion`에서 현재 문제 제목 출력
4. `QuestionData`에서 보기 목록과 선택 처리 구현
   - `useEffect`와 `setTimeout`을 활용하여 1초 간격 타이머 구현
   - 5초가 지나거나 버튼 클릭 시 다음 문제로 이동
   - 정답일 경우 정답 배열에 저장
5. 마지막 문제 종료 시 `isDone` 상태값을 true로 변경하여 결과 화면 출력
6. `QuizResult`에서 정답 개수 및 정답률 출력, 다시 시작 버튼을 통해 상태 초기화

---

## 기술 스택

- React (Hooks: `useState`, `useEffect`)
- JavaScript (ES6)
- CSS

---

## 실행 방법

```bash
npm install
npm start
```

---

## 폴더 구조

```
/src
├── App.jsx
├── PlusMinusBtn/
│   └── PlusMinusBtn.jsx
├── Quiz/
│   ├── QuestionData.jsx
│   ├── QuizApp.jsx
│   ├── QuizQuestion.jsx
│   └── QuizResult.jsx
└── TodoList/
    ├── FilterButton.jsx
    ├── TodoApp.jsx
    ├── TodoInput.jsx
    ├── TodoItem.jsx
    └── TodoList.jsx
```
