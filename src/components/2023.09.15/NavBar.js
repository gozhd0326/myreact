import styled from "styled-components";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { NavLink, Link } from "react-router-dom";
// back은 url기준으로 옮겨지기 때문에 url 이 같으면 뒤로가기가 되지 않는다.

const Container = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #eee;
  font-size: 1.5rem;
  padding: 50px 10px;
`;
const Li = styled.li`
  list-style-type: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`; //components는 무조건 대문자로 작성
export function Navbar({ setPage }) {
  return (
    <>
      <Container>
        <ul>
          <Li>
            {/* to 속성에는 route에서 선언한 url 주소를 적어준다. */}
            {/* 자식꺼를 부모가 부를 수는 없지만 자식이 부모꺼를 부를 수 있음. */}
            <StyledLink to={"/"}>
              {/*Link href="#" onClick={() => setPage(Home)} onClick={() => setPage(Home)에서 home은 컴포넌트임  */}
              Home
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/contact"}>Contact</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/about"}>About</StyledLink>
          </Li>
        </ul>
      </Container>
    </>
  );
}
