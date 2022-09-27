// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수 선언
let nextId = 1;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

// 초기 상태 선언
// 리듀서의 초기 상태는 꼭 객체타입일 필요없음
const initialState = [
  /*
  {
    id: 1,
    text: '예시',
    done: false
  } 
   */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo => 
          todo.id === action.id
          ? { ...todo, done: !todo.done }
          : todo
      );
    default:
      return state;
  }
}

