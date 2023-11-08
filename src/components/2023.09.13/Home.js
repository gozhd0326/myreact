import { Menu } from "./Menu";
import { Button } from "./Button";
import { styled } from "styled-components";
import { ItemList } from "./ItemList";
const Container = styled.div`
  width: 200px;
  height: 100vh;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  /* 글씨나 내용이 눈에 띄는 이유는 여백 때문임 */
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 300px;
  width: ${() => window.innerWidth - 200}px;
  height: 100vh; /* height는 안써도 무방 */
`;

const XL = "3rem";
const LARGE = "2rem";
const MEDIUM = "1.5rem";
const SMALL = "1rem";
const XSAMLL = "0.7rem";

// 상수는 모두 대문자로 작성(일반적으로 그렇게 사용)

export function Home() {
  return (
    <>
      <Container>
        <Menu fontSize={LARGE} />
        {/* <h1>한글폰트 알아보자</h1> */}
      </Container>
      <Content>
        <div>
          <Button color="white" bgcolor="lightpink" title="BUTTON 1" />
          <Button color="white" bgcolor="lightblue" title="BUTTON 2" />
          <Button color="white" bgcolor="lightgreen" title="BUTTON 3" />
        </div>
        <br />
        <br />
        <br />
        <div>
          <ItemList />
        </div>
      </Content>
    </>
  );
}
