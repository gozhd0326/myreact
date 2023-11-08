import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
`;

const Slide = styled(motion.div)`
  position: absolute;
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.$bgcolor}; //$는 나중에 컴파일할 때 css에 없는 속성이기 때문에 넣지 말아라 라는 의미로 사용됨
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${(props) => props.left}px;
  top: 0;
`;

const Btn1 = styled.button`
  position: absolute;
  left: 100px;
  top: 600px;
`;
const Btn2 = styled.button`
  position: absolute;
  left: calc(100vw - 150px);
  top: 600px;
`;

function Page1({ left }) {
  return (
    <>
      <Page bgcolor="lightgreen" left={left}>
        <h1>Page 1</h1>
      </Page>
    </>
  );
}
function Page2({ left }) {
  return (
    <>
      <Page bgcolor="khaki" left={left}>
        <h1>Page 2</h1>
      </Page>
    </>
  );
}
function Page3({ left }) {
  return (
    <>
      <Page bgcolor="lightblue" left={left}>
        <h1>Page 3</h1>
      </Page>
    </>
  );
}
function Page4({ left }) {
  return (
    <>
      <Page bgcolor="teal" left={left}>
        <h1>Page 4</h1>
      </Page>
    </>
  );
}

export function SlideBox() {
  const pageList = [Page1, Page2, Page3, Page4]; //slide //화면에 뿌려줄 외부 컴포넌트 (map을 사용해도 됨) //컴포넌트의 배열
  const [slideX, setSlideX] = useState(0); //slide는 1,2,3,4 이런식으로 됨(여기에 가로길이 곱하기)
  const page = useRef(0); //현재 보여지고 있는 페이지가 마지막이거나 첫페이지면 그 이상, 그 이전으로 못이동하도록 만듦
  function handleLeftBtn() {
    if (page.current > 0) {
      //useref를 사용하고 있기 때문에 current를 사용. page.current는 현재페이지임
      setSlideX(slideX + 1);
      page.current = page.current - 1;
    }
  }
  function handleRightBtn() {
    if (page.current < pageList.length - 1) {
      setSlideX(slideX - 1);
      page.current = page.current + 1;
    }
  }

  return (
    <>
      <Container>
        <Slide
          animate={{ x: slideX * window.innerWidth }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          {pageList.map(
            (
              Page,
              i // 컴포넌트이기 때문에 대문자를 사용
            ) => (
              <Page key={i} left={window.innerWidth * i} /> //페이지를 이동하기 위한 코드 //컴포넌트를 화면에 보여주는 코드
            )
          )}
        </Slide>
        <Btn1 onClick={handleLeftBtn}>LEFT</Btn1>
        <Btn2 onClick={handleRightBtn}>RIGHT</Btn2>
      </Container>
    </>
  );
}
