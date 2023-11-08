import { useQuery } from "react-query";
import { purchaseGames } from "./api";
import { Navigate } from "react-router-dom";
//결제 페이지, 결제페이지는 임의로 넘어가면 안되고 특정 페이지에서 넘어가야 되기 때문에 라우터를 사용하지 않아도 됨.
export function Purchase({ list }) {
  console.log("purchase comp", list);
  const { data: PurchaseList, isLoading: purchasing } = useQuery(
    "purchase",
    () => purchaseGames(list)
  );
  return (
    <>{purchasing ? <h1>구매 처리중...</h1> : <Navigate to="/dashboard" />}</>
  );
}
