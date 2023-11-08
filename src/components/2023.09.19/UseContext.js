// prop 지옥 = prop drilling //전형적인 매우 최악의 상황
// 이러한 문제점을 해결하기 위한 createContext를 사용
import { useContext, useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export function UseContext() {
  const [user, setUser] = useState("HyeJeong"); //저장공간이라고 생각하면 됨. 대신 provider로 감싼 애들만. value 값을 저장하는 용도. provider 안에 있으면 언제든 꺼내볼 수 있음
  return (
    <>
      <UserContext.Provider value={user}>
        {/* provider를 쓰면 모든 자식들에게 영향을 미친다(component4까지!) */}
        {/* povider는 value라는 속성을 써야함. value에는 useState를 사용한 값을 넣어야함 */}
        <h1>UseContext</h1>
        <Component1 />
      </UserContext.Provider>
    </>
  );
}
function Component1() {
  return (
    <>
      <h1>Component1</h1>
      <Component2 />
    </>
  );
}
function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component3</h1>
      <Component4 />
    </>
  );
}
function Component4() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component4</h1>
      <p>Hello {user}</p>
    </>
  );
}
