//순수 js 파일이기 때문에 이름을 소문자로 작성해도 됨.
//api.js를 작성해 놓으면 어느 function에서나 불러서 사용할 수 있음!
// usequery는 fetch를 대신하는 것이라고 생각하면 됨.
export function getAllGames() {
  return fetch(`http://localhost:8080/products`, { method: "GET" }) //fetch를 불러주는 함수(fetch를 여러 개 사용할 경우 독립적으로 하나하나 사용하기 힘들기 때문에 함수 안에 넣음.) // Rest API 하나당 함수 하나씩 작성
    .then((response) => response.json()); //response가 불리면 data가 불림
  //실질적으로 데이터를 처리하진 않음. 두번째 then은 데이터를 가공하는 코드지만 여기서는 호출한 녀석이 알아서 데이터를 가공하기 때문에 필요 없음.
}

export function getGameById(id) {
  return fetch(`http://localhost:8080/products/${id}`, { method: "GET" }) //fetch를 불러주는 함수(fetch를 여러 개 사용할 경우 독립적으로 하나하나 사용하기 힘들기 때문에 함수 안에 넣음.) // Rest API 하나당 함수 하나씩 작성
    .then((response) => response.json()); //response가 불리면 data가 불림
  //실질적으로 데이터를 처리하진 않음. 두번째 then은 데이터를 가공하는 코드지만 여기서는 호출한 녀석이 알아서 데이터를 가공하기 때문에 필요 없음.
  //$는 중괄호 앞에써야함. 변수자리이기때문
}

//하나를 사도 배열로 받을 수 있도록
export function purchaseGames(games) {
  const purchaselist = games.map((game) => ({
    game: game,
    quantity: 1,
  }));
  console.log("여기", purchaselist);
  //   //export function purchaseGames(games) {
  //   const purchaselist = games.map((game) => {
  //     return{game: game,
  //     quantity: 1,
  //};
  //   }); 이런식으로 쓰던지
  //객체의 생성 중괄호가 아니라 애로우 함수의 중괄호로 오해함.
  return fetch(`http://localhost:8080/products/purchaselist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(purchaselist), //JSON.stringify(객체)=> 객체를 제이슨화 하는 코드(여기서는 purchase와 같은 모양으로 생겨야함.//postman의 body와 같음
  }).then((response) => response.json());
}

export function getAllPurchasedGames() {
  return fetch(`http://localhost:8080/products/purchase`, {
    method: "GET",
  }).then((response) => response.json());
} //이게 무슨 RestAPI인지 구별할 수 있도록 이름을 작성(최대한 자세히 작성하는게 좋음!)이름이 길어지더라도...
