import styled from "styled-components";

const Container = styled.div`
  width: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  & i {
    //&(엠퍼센트=나)하고 띄어쓰기 해야됨 ! 그래야지 나의 자식들을 의미하는 것임. (이 것은 Container 안에 있는 i 태그를 의미)
    font-size: 1.8rem;
    margin-bottom: 3px;
  }
  & span {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
export function NavItem({ icon, name }) {
  return (
    <>
      <Container>
        <i className={icon}></i>
        <span>{name}</span>
      </Container>
    </>
  );
}
// navbar에서 누르면 색이 변하는 하나의 네모
