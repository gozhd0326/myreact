// router = 분배기
// 들어오는 정보를 파싱, 슬래시 뒤에 붙은 이름을 인식해서 그 해당 js로 이동하게끔 한다.(속임. 여러개의 html처럼 가상의 url을 만듦)
// react-router-dom //router가 들어오는 요청을 dom에게 분배한다. //styled components 처럼 하나의 library임
//npm i react-router-dom
import styled from "styled-components";
import { useState } from "react";
import { Navbar } from "./NavBar";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Error } from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 70%;
`;

const Content = styled.div``;

export function MyRouter() {
  const [page, setPage] = useState(About);
  return (
    <>
      <BrowserRouter>
        {/* 반드시 브라우저 라우터로 감싸줘야 됨. 내 홈페이지의 가장 위에서 감싸줘야함. 이 영역을 벗어나면 에러 발생 */}
        <Container>
          <Navbar setPage={setPage} />
          <Content>
            <Routes>
              {/* path는 주소창의 url을 말함 */}
              {/* 대문자 입력 x  */}
              {/* / 앞에는 공통의 url 주소가 있음. */}
              {/* 내가 만든 컴포넌트의 갯수는 js의 갯수와는 상관 없고 router로 선언한 것과 관련이 있음. */}
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              {/*  주소창에 /만 있는 경우 그때는 home컴퍼넌트를 content에 적용(home)을 보여라*/}
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<Error />}></Route>
              {/* '*'은 나머지라는 뜻 */}
            </Routes>
          </Content>
        </Container>
      </BrowserRouter>
    </>
  );
}
