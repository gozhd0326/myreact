// programing에서 gesture란 mouse click, double click... 등등
// afterEffect 를 애니메이션으로 많이씀
// 참조 : 그 메모리가 행하는 곳에 포인터 해줌
// 포인터: 그 메모리를 직접 참조
import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #d0e, #91f);
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 15px;
`;

const BiggerBox = styled.div`
  width: 1000px;
  height: 800px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`; //backtick 안에 씌어졌기 때문에 문자열안에 처리

const gesture = {
  hover: { scale: 1.2, rotateZ: 90 }, //type의 default값이 spring임
  tap: { scale: 0.8, rotateZ: -90, borderRadius: "100%" },
  drag: { backgroundColor: "rgb(46,204,113)" },
};
//오로지 숫자만 씌여진게 아니라면 모두 문자열 처리해야됨.

export function Gesture() {
  // useRef의 또 다른 사용법  = DOM객체를 직접 사용할 수 있게해줌
  // 리액트는 가상DOM(Virtual DOM)을 사용하므로 실제 DOM을 엑세스 할 수 없고 useRef만이 할 수 있음
  const bigBoxRef = useRef(null);
  return (
    <>
      <Container>
        <BiggerBox ref={bigBoxRef}>
          <Box
            variants={gesture}
            drag
            dragConstraints={bigBoxRef}
            //   dragSnapToOrigin="drag"
            // dragElastic="1"
            whileHover="hover"
            whileTap="tap"
            whileDrag="drag"
          />
          {/* //dragable이라는  html 속성 때문에 drag 라고 따로 써줘야됨 */}
          {/* gesture는 initail을 안넣어도 됨. 실행하는 동시에 시작으로 인식하기 때문 */}
        </BiggerBox>
      </Container>
    </>
  );
}
