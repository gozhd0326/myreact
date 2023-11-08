import { useQuery } from "react-query";
import { getAllPurchasedGames } from "./api";

export function Dashboard() {
  const { data: purchaseGames, isLoading } = useQuery(
    "dashboard",
    getAllPurchasedGames
  );
  return (
    <>
      <h1>Dashboard</h1>
      <h3>{user.loginId} 의 구매목록</h3>
      {!isLoading &&
        purchaseGames.map((game, index) => (
          <p key={index}>
            타이틀 : {game.game.title}, 수량 : {game.quantity}
          </p> //game 안에 game이 있음.
        ))}
    </>
  );
  // useState 상태관리(상태가 바뀔때만 화면이 새로 랜더링)
  // 특정한 상태만 모니터링을 했다가 다른 상태가 변경했을 때는 동작하지 않고 특정한 상태만 변경되었을 경우에만 useEffect
  // 유즈래프 값만 저장할 뿐 랜더링에는 관여하지 않는다
  // 유즈컨텍스트 저장소(형제끼리는 서로 값을 전달하고 주고 받을 방법이 없기 때문에 이것을 이용해 부모의 내용을 컨텍스트에 저장해놓으면 모든 자식들이 값을 공유할 수 있고 수정할 수 있음.)
  // 유즈네비게이트 유알엘을 변경시키면서 페이지를 이동
}
