// Logo img background-remove : https://www.remove.bg/ko/upload
import styled from "styled-components";
import hellokitty from "./image/hellokitty1.webp";
import logo from "./image/Hello-KittyLogo-removebg.png";
import card1img from "./image/floor1wish_2.png";
import card2img from "./image/miraclecafe_3.png";
import card3img from "./image/sanrio_onlinemall.png";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    background-image: url(${() => hellokitty});
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(0.25);
    background-size: cover;
    background-repeat: no-repeat;
    /* opacity: 0.7; */
  }
`;

const TitleBox = styled.div`
  position: absolute;
  left: 8%;
  top: 8%;
  line-height: 6rem;
  h2 {
    font-size: 7.5rem;
    text-shadow: 2px 2px 2px black;
    color: rgba(226, 182, 201, 0.884);
    /* color: rgba(235, 204, 218, 0.85); */
    font-weight: 500;
  }
  p {
    position: absolute;
    left: 14%;
    color: rgba(224, 214, 219, 0.884);
    font-size: 1.8rem;
    font-weight: 200;
  }
  /* background-color: rgb(237, 153, 206, 0.7); */
`;
const Img = styled.img`
  margin-right: 0.8rem;
  width: 100px;
  height: 80px;
  z-index: 10;
  background-color: rgba(235, 204, 218, 0.334);
  border-radius: 30%;
  object-fit: contain;
`;
const Cards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  height: 525px;
  position: relative;
  top: 30%;
  left: 20%;
  padding: 0 30px;
  overflow: hidden;
  background-color: plum;
`;
const Card1 = styled.li`
  list-style: none;
  background-image: url(${() => card1img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 450px;
  height: 580px;
`;
const Card1_1 = styled.li`
  list-style: none;
  background-image: url(${() => card1img});
  background-size: cover;
  position: absolute;
  width: 900px;
  height: 580px;
`;
const Card2 = styled.li`
  list-style: none;
  background-image: url(${() => card2img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 450px;
  height: 580px;
:hover{
  
}
`;
const Card2_1 = styled.div`
  position: absolute;
  list-style: none;
  background-image: url(${() => card2img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 900px;
  height: 580px;
`;

const Card3 = styled.li`
  list-style: none;
  background-image: url(${() => card3img});
  background-size: contain;
  background-position: center;
  width: 450px;
  height: 580px;
`;
const Card3_1 = styled.div`
  position: absolute;
  list-style: none;
  background-image: url(${() => card3img});
  background-size: contain;
  background-position: center;
  width: 900px;
  height: 580px;
`;
const Title1 = styled.h3``;
const Title2 = styled.h4``;
const P = styled.p``;
export function Composition() {
  return (
    <>
      <Container>
        <TitleBox>
          <h2>
            <Img alt="HelloKitty-Logo" src={logo}></Img>Composition
          </h2>
          <p>헬로키티아일랜드 구성 안내</p>
        </TitleBox>
        <Cards>
          <Card1>
            <Title1>MUSEUM</Title1>
            <Card1_1>
              <Title2>MUSEUM</Title2>
              <P>
                즐겁고 행복한 이야기들이 가득한 이 곳, Hello Kitty Island에
                여러분을 초대합니다.
              </P>
            </Card1_1>
          </Card1>
          <Card2>
            <Title1>CAFE</Title1>
            <Card2_1>
              <Title2>CAFE</Title2>
              <P>
                엄마 메리의 따뜻함이 느껴지는 주방입니다. 달콤한 디저트와
                부드러운 커피 한 잔을 즐겨보세요.
              </P>
            </Card2_1>
          </Card2>
          <Card3>
            <Title1>ONLINE SHOP</Title1>
            <Card3_1>
              <Title2>ONLINE SHOP</Title2>
              <P>귀여운 헬로키티와 친구들을 만나보세요!</P>
            </Card3_1>
          </Card3>
        </Cards>
      </Container>
    </>
  );
}
{
  /* <figure>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hJQ2PeWudj8"
            title="우수관광사업체_핼로키티아일랜드(2019)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </figure> */
} //youtube영상
