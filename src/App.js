// import { List } from "./components/2023.09.11/List";
// import { Session1 } from "./components/2023.09.11/Session1";
import { createGlobalStyle } from "styled-components";
// import { Home } from "./components/2023.09.13/Home";
// import { Modal } from "./components/2023.09.15/Modal";
import { Home1 } from "./components/HelloKittyIsland/Home1";
// import { GameShop } from "./components/2023.09.18/GameShop";
import { UseContext } from "./components/2023.09.19/UseContext";
import { MyRouter } from "./components/2023.09.15/MyRouter";
import { Home } from "./components/2023.09.18/Home";
import { Modal } from "./components/Utils/Modal";
import { IntroSlider } from "./components/HelloKittyIsland/IntroSlider";
import { MyMotion1 } from "./components/2023.09.22/Mymoition1";
import { Gesture } from "./components/2023.09.22/Gesture";
import { Mymotion2 } from "./components/2023.09.22/Mymotion2";
// import { Gallery } from "./components/2023.09.14/Gallery";
// import { OpenWeather } from "./components/2023.09.14/OpenWeather";
// import { MyRef } from "./components/2023.09.15/MyRef";
// import { MyRouter } from "./components/2023.09.15/MyRouter";
// import { GameShop } from "./components/2023.09.18/GameShop";
// import { Tab } from "./components/20230911/Tab";
// import { Menu } from "./components/23.09.13/Menu";
// import { GameShop } from "./components/GameShopFrontEnd/GameShop";
import { GameShop } from "./components/GameShopFrontEndT/GameShop";
import { QueryClient, QueryClientProvider } from "react-query";
const GlobalStyle = createGlobalStyle`
@font-face {
      font-family: 'GmarketSansMedium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
*{margin:0;
padding:0;
box-sizing: border-box;
font-family:Poppins, GmarketSansMedium;
}

`; //모든 스타일에 적용되는 컴포넌트임

//게임샵 안에서 usequery를 사용하고 싶어서 구조를 바꿈.
const client = new QueryClient();
function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <GameShop />
      </QueryClientProvider>
    </>
  );
}
export default App;
// {/* globalstyle이 home을 덮어씌우는 구조가 아니라 위에서 선언을 하는 것임. */}
// {/* 이곳에 Menu를 넣으면 Home은 사라지게 됨 */}
// {/* <OpenWeather cityName="tokyo" /> */}
// {/* <MyRef /> */}
