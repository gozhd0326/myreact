import { Outlet, useNavigate } from "react-router-dom";
import games from "./DB/Data";
import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "./GameShop";
const Container = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Card = styled.div`
  width: 180px;
  border: 2px solid dodgerblue;
  margin-bottom: 20px;
  font-size: 0.8rem;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.p`
  margin-left: 10px;
`;

export function Products() {
  const navigate = useNavigate();
  const { checkList, setCheckList } = useContext(GameContext);
  function onClick(id) {
    //navigate의 첫번째 파라미터에는 문자열을 받음
    navigate(`${id}`); // `${}`는 id가 숫자인데 문자열로 바꿔주는 역할.
    //앞에 슬래시가 없으면 상대경로를 뜻함.
    // 상대 경로는 '/' 없이 작성함. 현재 주소 뒤에 추가됨.
    // Navigate(`/products${id}`);
    // 절대 경로는 '/'로 시작되는 root 이하 전체 주소를 적어야 함
    // console.log(id);
  }
  function onChange(e) {
    const temp = checkList.map((item) => {
      if (item.id == e.target.id) {
        return { ...item, checked: e.target.checked }; // item에 id랑 checklist를 가져와서 checklist를 오버레이
        // 객체와 배열에 모두 사용가능
      } else {
        return item;
      }
    });
    console.log(temp);
    setCheckList(temp); //gameshopd에서 setchecklist를 관리,저장하고 있기 때문에 gameshop에서도 다시 랜더링 됨.(gameshop에 있는 console.log와 여기에 있는 console.log가 동시에 찍혀 2개씩 찍힘)
  }
  return (
    <>
      <h3>Games List</h3>
      <Container>
        {games.map((game, i) => (
          <Card key={game.id}>
            <div onClick={() => onClick(game.id)}>
              {/* 에로우 함수는 정의 부분이 인라인에 있을 수 있기 때문에 스코프가 가능함 */}
              {/* <div onClick={(첫번째 파라미터 = e) => onClick(game.id)}> */}
              {/* div onClick은 이벤트 콜백함수가 아니라 일반 함수임. */}
              {/*  <div onClick={(onClcik)}>는 이벤트 콜백함수의 첫번째 파라미터는 고정되어 있기 때문에 game.id를 넣고 싶을 때는 다르게 작성해야 됨. */}
              <Img src={game.image} />
              <Text>타이틀 :{game.title}</Text>
              <Text>장르 : {game.genre}</Text>
              <Text>가격 : {game.price}</Text>
            </div>
            <input
              type="checkbox"
              id={game.id}
              onChange={onChange}
              checked={checkList[i].checked} //update된 checklist 값으로 적어줘야함.
            />
            {/* onChange={onChange} 이기 때문에 onChange는 이벤트 객체 */}
          </Card>
        ))}
      </Container>
      <Outlet />
      {/* outlet은 자식 router를 화면에 randering 하기 위한 코드임 */}
      {/* Outlet = 콘센트 */}
    </>
  );
}
