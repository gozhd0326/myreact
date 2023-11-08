import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
// default로 export 할 시 중괄호 필요없음
import styled from "styled-components";
import { GameContext } from "./GameShop";
const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 100%;
`;
const Content = styled.div`
  font-size: 0.8rem;
`;

export function SingleProduct() {
  const { games } = useContext(GameContext);
  const { id } = useParams(); //useParams는 react-router-dom이 제공하는 후크
  //URL을 읽어서 id를 전달해줌
  //객체의 detructuring 문법
  //여기서 id는 gameshop의 <Route path=":id"> 이 부분임
  // id를 통해서 DB로부터 게임의 정보를 가져옴
  const game = games.find((g) => g.id == id);
  // 객체의 destructuring 문법
  const { title, genre, image, price, text } = game;
  //만약 filter를 사용할 경우 객체를 사용하기 때문에 game(0)이런식으로 사용해야됨
  // console.log(id);
  return (
    <>
      <h3>{title}</h3>
      <Container>
        <Img src={image} />
        <Content>
          <p>타이틀 : {title}</p>
          <p>장르 : {genre}</p>
          <p>가격 : {price}원</p>
          <p>{text}</p>
          <Link to="/Products">목록으로 돌아가기</Link>
          {/* 리엑트 라우터 돔이 제공하는 컴포넌트임 */}
        </Content>
      </Container>
    </>
  );
}
//http://localhost:3001/products/아무글자 를 입력하면 product 밑에 singleproduct 밑에 입력됨
// 단, /가 붙으면 id의 자식으로 판단하므로 error
// http://localhost:3001/products/10002 //id = 10002
// http://localhost:3001/products/10002/12 //error
