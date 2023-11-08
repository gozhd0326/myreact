import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    font-size: 2rem;
    margin: 10px;
    border-radius: 5px;
  }
`;

export function CounterState() {
  console.log("CounterState start!!!!");
  const [count, setCount] = useState(0); //배열의 Destructuring //보통 setter function의 이름은 set+value로 작명 //useState는 최초의 로딩때 1번만 실행됨
  //useState는 프로퍼티이면서 함수임
  //   let count = 0;
  function minus() {
    // count = count - 1;
    setCount(count - 1);
    // console.log("minus", count);
  }
  function plus() {
    // count = count + 1;
    setCount(count + 1);
    // console.log("plus", count);
  }

  //function을 글로벌함수로 바깥에 쓸 수도 있지만 counterstate는 독립적인 모듈이기 때문에 일반적으로는 사용하는 모듈(프로퍼티)안에 선언함.
  console.log("CounterState end!!!!!!", count);
  return (
    <>
      <Container>
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
        {/* 숫자와 문자열을 제외( ex) 함수,객체,배열 등 )하고는 무조건 중괄호 안에 넣기!!!! */}
        <button onClick={plus}>+</button>
      </Container>
    </>
  );
}
