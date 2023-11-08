import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgray;
`;
const Li = styled.li`
  width: 100%;
  padding-left: 20px;
  list-style: none;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  //font의 링크는 public의 index.html의 링크에 입력
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  padding: 0 5px;
  &:hover {
    background-color: white;
    color: lightgray;
  } /* 링크의 호버라는 의미 , &(앰퍼센드)를 사용해야함.(본인이라는 의미) */
`;
export function Menu({ fontSize }) {
  return (
    <>
      {/* 인라인 스타일링은 우선순위가 높음 이전에 다른 스타일이 적용되도 무시하고 적용 */}
      {/* 인라인 스타일링, 밑에 작성한 코드, 누구의 자식 누구의 자식으로 셀랙션 한 애들의 우선 순위가 높음. 하지만 important가 가장 힘이 강력함(하지만 웬만해선 쓰지 않는 것 을 권고) */}
      <Container>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {/* 문자열이 아니라는 중괄호{} 안에 {}객체를 뜻하는 중괄호 */}
          {/* 스타일드 컴포넌트로 하는게 효율적이긴 함. 이것은 방법에 대한 예시 */}
          <Li fontSize={fontSize}>
            <Link href="#">Home</Link>
          </Li>
          <Li fontSize={fontSize}>
            <Link href="#">Content</Link>
          </Li>
          <Li fontSize={fontSize}>
            <Link href="#">About</Link>
          </Li>
          <Li fontSize={fontSize}>
            <Link href="#">Contact</Link>
          </Li>
          <Li fontSize={fontSize}>
            <Link href="#">Social</Link>
          </Li>
        </ul>
      </Container>
    </>
  );
}

// 부모는 하나여야 하기 때문에 태그로 감싸기(빈태그여도 상관 없음)
