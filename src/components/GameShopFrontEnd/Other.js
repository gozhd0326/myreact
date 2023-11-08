import styled from "styled-components";
import { GameContext } from "./GameShop";
import { useContext, useEffect, useState } from "react";
import { Purchase } from "./Purchase";
const Container = styled.div`
  position: relative;
`;
const Card = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  border: 1px solid dodgerblue;
  margin: 10px 0;
  position: relative;
`;
const Img = styled.img`
  height: calc(
    100%-2
  ); //img가 넘치는 것을 막기 위해(margin을 1px씩 주었기 때문에)
  margin: 1px; //border line이 보이기 위해 설정
`;
const Text = styled.p`
  margin-left: 10px;
  font-size: 0.5rem;
`;
const DeleteBtn = styled.button`
  width: 30px;
  height: 100%;
  /* background-color: teal; */
  background-color: lightblue;
  position: absolute;
  right: 0;
  text-align: center;
  line-height: 100px;
  border: none;
  cursor: pointer;
`;
export function Other() {
  const { checkList, setCheckList, games } = useContext(GameContext);
  // useState는 기본적으로 대괄호를 사용
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasing, setPurchasing] = useState(false);
  //이제 게임스 대신에 patch로 보낸 api의 응답을 받아 적용한다(mysql에 저장된 db)를 사용(임포트를 하지 않는다.)
  const newList = games.filter((g, i) => checkList[i].checked); // 반드시 true 아님 false 여서 c.checked는 조건임(참일때) //g를 쓰지 않아도 써야 i가 두번째 파라미트(인덱스)가 되기 때문에 무조건 g(객체 1개)도 같이 써줘야함
  console.log(newList);
  function onClick(e) {
    //여기서만 잠깐 쓸 임시배열 = temp
    const temp = checkList.map((item) => {
      if (item.id == e.target.id) {
        return { ...item, checked: false };
      } else {
        return item;
      }
    });
    console.log(temp);
    setCheckList(temp); //map 바깥에 , onClick 안에 작성해야 됨
  } //onclick은 삭제 코드

  function onClickBtn() {
    setPurchasing(true);
  } //구매프로세스 진행

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < newList.length; i++) {
      price = price + newList[i].price;
    }
    setTotalPrice(price);
  }, [checkList]); //useEffect는 두번째 파라미터를 빈배열이라도 작성해야 됨. 빈 배열 시 최초 1번만 랜더링, 배열이 있을 경우 그것이 변경될 경우만 랜더링 됨.
  console.log(totalPrice);
  return (
    <>
      {!purchasing ? (
        <>
          <Container>
            {newList.map((game) => (
              <Card key={game.id}>
                <Img src={game.image} />
                <div>
                  <Text>타이틀 : {game.title}</Text>
                  <Text>장르 : {game.gnre}</Text>
                  <Text>가격 : {game.price}</Text>
                </div>
                <DeleteBtn id={game.id} onClick={onClick}>
                  X
                </DeleteBtn>
              </Card>
            ))}
          </Container>
          <h3>총 결제 금액 : {totalPrice}원</h3>
          <button onClick={onClickBtn}>결제버튼</button>
        </> //원래 카트화면(빈태그<></>로 싸줘야 된다.)
      ) : (
        <Purchase list={newList} /> //구매목록=newList props 로 전달하여 list로 받는다.
      )}
    </>
  );
}
