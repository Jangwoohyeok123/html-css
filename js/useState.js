// version 1
const useState_v1 = (initialValue) => {
  // use는 get과 set으로 나뉜다.
  let state = initialValue;
  const getState = () => {
    return state;
  };

  const setState = (newState) => {
    state = newState;
  };

  return [getState, setState]; // javascript의 구조분해 할당 문법의 편리성 때문에 리터럴 객체보다 배열로 리턴한다.
};

// v1 hook 이용자
const [getState, setState_v1] = useState_v1(5);

// get
const userVal_v1 = getState() + 3;

// set
setState_v1(5);

// version 2 : latest version
const useState_latest = (initialVal) => {
  let _state = initialVal; // closure pattern 의 state
  const state = _state; // useState hook 이용자가 getter를 호출하여 state를 get하는 구조가 필요 없도록 값의 형태로 전달하기 위한 코드
  const setState = (newVal) => {
    _state = newVal;
  };
  return [state, setState]; // 함수가 리턴되고 전역변수로 저장되면, 함수는 선언 당시의 렉시컬 환경을 저장한다.
};

// hook 이용자
const [state, setState_v2] = useState_latest(5);

// get
const userVal_v2 = state_v2 + 3;

// set
setState_v2(5);

// react 는 get의 편의성을 제공한 훅을 제공하였다. 내부적으로는 클로저를 이용한 get/set pattern 이 숨어져 있다.
