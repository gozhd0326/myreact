import styled from "styled-components";
import { animate, motion, useAnimationControls } from "framer-motion";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #d0e, #91f);
`;
// motion-framer를 넣기 위해선 motion이 styledComponent를 감싸야함. 상속받는 것처럼 작성하기
const Box = styled(motion.div)`
  //꼭 기억하기!!!
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  /* 입체감을 더 주기 위한 진한 그림자,연한그림자를 이중으로 넣음 */
  padding: 15px;
`;
const move = {
  left: { x: -500, transition: { duration: 0.5 } },
  right: { x: 500, transition: { duration: 0.5 } },
};
const Btn = styled.button`
  width: 100px;
  height: 60px;
  text-align: center;
  position: absolute;
  top: 100px;
  left: ${(props) => props.$left};
`;
export function Mymotion2() {
  const control = useAnimationControls();
  function onClickLeft() {
    control.start("left");
  }
  function onClcikRight() {
    control.start("right");
  }

  return (
    <>
      <Container>
        <Box variants={move} animate={control} />
        <Btn $left="200px" onClick={onClickLeft}>
          Left
        </Btn>
        <Btn $left="1600px" onClick={onClcikRight}>
          Right
        </Btn>
      </Container>
    </>
  );
}
