import { useContext } from "react";
import { GameContext } from "./GameShop";
import { Login } from "./Login";
import { Navigate } from "react-router-dom";
export function ProtectedRoute({ children }) {
  const { user, setUser } = useContext(GameContext);
  // childern 이라는 이름은 정해져있기 때문에 바꿀 수 없다.
  console.log(children);
  // 로그인이 되었는지 확인하는 조건 필요!!  //
  if (user.name && user.email) {
    return children; // 자식 컴포넌트들이 다 생김
  } else {
    // return <Login />;
    return <Navigate to="/login" />; //페이지 포워딩(강제로 홈페이지 이동)
  }
}
// return<></> 은 jxs의 컴포넌트를 보여줌
// return <Login />; 을 할 수 있음 = > 다른 js에서도 가능
