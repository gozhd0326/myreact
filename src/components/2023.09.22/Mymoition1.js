// framer-motion //리액트에서 사용하는 애니메이션 라이브러리
// framer-motion-animate
// 설치 : npm i framer-motion
//dependencies = 의존성
//react-dom 은 가상의 돔
//npm uninstall framer-motion : framer-motion을 지우고 싶을 때
import styled from "styled-components";
import { animate, motion } from "framer-motion";
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
// 애니메이션 세팅을 한 객체를 Framer-motion에서는 Variant라고 부름
const animate1 = {
  //   start: { scale: 0 },
  //   end: { scale: 1 },
  //   이런 식으로도 사용가능
  start: {
    scale: 1,
    x: 500,
    transition: { duration: 2, type: "spring", damping: 9 },
  }, //start와 end는 다른 이름이여도 상관없음
  end: {
    scale: 1,
    transition: { duration: 2, type: "spring", damping: 9, delay: 1 },
  },
  round: {
    scale: 1,
    borderRadius: "50%",
    transition: { duration: 2, type: "spring", damping: 9, delay: 1 },
  },
  leftMove: {
    scale: 1,
    x: -500, //현재 위치에서 얼마나 이동할 것인지를 적음
    rotateZ: -720,
    transition: { duration: 2, type: "spring", delay: 1 },
  },
};
//scale 0은 사라짐, scale 1은 본래의 크기대로

export function MyMotion1() {
  return (
    <>
      <Container>
        <Box
          variants={animate1}
          // initial= 시작상태(고정값)
          initial="start" //start와 end를 바꾸면 기본 크기였다가 소멸됨.
          // animate= 끝나는 상태(고정값)
          animate="leftMove" //실제 애니메이션 효과는 animate(끝)쪽에 들어간다고 생각하면 됨.
          // transition= 객체형태로 들어가기 때문에 이중중괄호 사용
          transition={{ duration: 2, type: "spring", damping: 9 }} //s(초)를 안써도 됨 // damping은 10이 default 값임 (튕기는 느낌)//spring효과를 많이 주려면 damping을 같이 주면 됨(좀 더 극적인 효과)
        ></Box>
      </Container>
    </>
  );
}
