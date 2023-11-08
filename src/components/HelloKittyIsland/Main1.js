// background img 효과 참고 사이트 : https://ddorang-d.tistory.com/89
import styled from "styled-components";
import "./Home2.css";
// import cafe from "./image/cafe_1.png";
import company from "./image/main_company.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  /* z-index: 1; */
  /* opacity: 0.8; */
  color: white;
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: cover;
    filter: brightness(0.6);
    /* opacity: 0.7; */
    background-image: url(${() => company});
  }
`;
const SubTitlebox = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 1.5rem;
  text-shadow: 2px 2px 2px rgba(199, 21, 133, 1);
  h2 {
    font-weight: 500;
    /* -webkit-text-stroke: 0.1px rgb(199, 21, 133); */
  }
`;
const MainTitleBox = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 2.3rem;
  text-shadow: 2px 2px 2px rgba(199, 21, 133, 1);

  h1 {
    /* -webkit-text-stroke: 0.1px rgb(199, 21, 133); */
  }
  span {
    color: rgb(199, 21, 133);
  }
`;
const Text = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 1.4rem;
  text-shadow: 2px 2px 2px rgba(199, 21, 133, 1);
  hr {
    border: 3px solid rgb(237, 153, 206);
  }
`;
export function Main1() {
  return (
    <>
      <Container>
        <SubTitlebox>
          <h2>즐겁고 행복한 이야기들이 가득한 이 곳</h2>
        </SubTitlebox>
        <MainTitleBox>
          <h1>
            사랑받는 글로벌 캐릭터 <span>헬로키티</span>와 함께
          </h1>
        </MainTitleBox>
        <Text>
          <span>HelloKittyIsland</span>
          <hr></hr>
        </Text>
      </Container>
    </>
  );
}
