import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
`; //margin은 본인을 가운데 놓기 위함. display flex는 자식을 가운데 놓기 위함

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export function PropsTest({ firstName, subject: { math, english, history } }) {
  return (
    <>
      <Container>
        <h1>{firstName}</h1>
        <Table>
          <h3>Math</h3>
          <p>{math}</p>
          {/* p태그 안에서는 변수를 받아올 것이기 때문에 중괄호{}를 사용 */}
          <h3>English</h3>
          <p>{english}</p>
          <h3>History</h3>
          <p>{history}</p>
        </Table>
      </Container>
    </>
  );
}
