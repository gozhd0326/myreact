import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Other } from "./Other";
import { Error } from "./Error";
import { Login } from "./Login";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext } from "react";
import { useState } from "react";
import games from "./DB/Data";
import { ProtectedRoute } from "./ProtectedRoute";
import { useTheme } from "styled-components";
export const GameContext = createContext();
const defaultCheckList = games.map((g) => {
  return { id: g.id, checked: false }; //return 은 한줄로만 작성!!! 자기 라인에 있는 애만 볼 수 있음
});
export function GameShop() {
  const [checkList, setCheckList] = useState(defaultCheckList);
  const [user, setUser] = useState({});
  // console.log(checkList);
  return (
    <>
      <GameContext.Provider value={{ checkList, setCheckList, user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              {/* <Route></Route>의 형태나 self closing도 상관 없음 */}
              {/* 엘리먼트 안에는 태그형식으로 대문자 사용하여 입력(셀프클로징 하기) */}
              <Route index element={<Home />} />
              {/* index는 자식만 쓸 수 있음. 모두 다 같은 뎁스일 경우에는 안먹지만 이경우는 부모의 path를 가져온다는 뜻이여서 path="/" 대신 index를 사용할 수도 있다. */}
              <Route path="home" element={<Home />} />
              <Route path="products" element={<ProductWrapper />}>
                <Route index element={<Products />} />
                {/* index는 본인 부모의 주소와 같다 */}
                <Route path=":id" element={<SingleProduct />} />
                {/* ex) www.gameshop.com/product/여기써있는 것이 id로 인식됨 */}
              </Route>
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              >
                {/* {/* <Route path="" element={<Dashboard />}-->없애버림} */}
                {/* 숨겨야 되는 애는 path를 주면 안됨 */}
              </Route>
              {/* dashboard를 보호하는 애를 만들어서 감싸줘야한다. 바로 dashboard에 만드는 것은 좋지 않음. */}
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Other />} />
              <Route path="*" element={<Error />} />
              {/* error page는 아스테리스크(*) 사용하기 */}
              {/* 누군가의 자식으로 들어가면 상대경로로 바뀌기 때문에 /를 빼야됨 */}
              {/* 같은 형제자매(동일한 뎁스)일 경우에는 절대 경로(/)를 사용해도 상관은 없음 */}
              {/* /가 있는 경로는 절대경로인데 부모가 루트(/)가 아니면 절대경로와 상대경로가 같아지지 않기 때문에 에러가 생김 */}
              {/* :는 뒤에 누구나 올 수 있다. */}
              {/* :이 없으면 /id ~~하는 주소만 인식 */}
              {/* 로그인을 제공하는 사이트일 경우 로그인 기능이  있는 dashboard가 있어야함 */}
              {/* 보통 운영자dashboard에는 그래프가 많이 있음,(데이터시각화) */}
            </Route>
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>

      {/* router 를 사용할 때에는 browserrouter 안에 routes 안에 route 들을 넣으면 되고 route 안에는 path 와 element를 넣는게 기본 구조임*/}
    </>
  );
}
