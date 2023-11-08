import { useRef, useState } from "react";
import styled from "styled-components";
import Hellokitty from "./image/hellokittybg.png";
import Mi from "./image/mimi.png";
import Me from "./image/merrywhite.png";
import Jo from "./image/j.png";
import Ma from "./image/m.png";
import An from "./image/a.png";
import Da from "./image/d.png";
import Ta from "./image/t.png";
import Pp from "./image/p.png";
import Tp from "./image/tp.png";
import Tr from "./image/tr.png";
import Jd from "./image/jd.png";
import Ju from "./image/ju.png";
import Joy from "./image/jo.png";
import Rt from "./image/rt.png";
import Rr from "./image/rl.png";
import TT from "./image/TT.png";
import Mr from "./image/Mr.png";
// 슬라이드 한개의 크기를 여기서 세팅함(px)
// 화면 전체는 window.innerWidth, window.innerHeight를 사용
const WIDTH = 900;
const HEIGHT = 550;

// 화면전체. 슬라이드 컨테이너를 화면 가운데 배치
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 25%;
  bottom: 20%;
`;
// 슬라이드 1개를 보여주는 윈도우. 슬라이드 하나의 사이즈를 가짐(액자형식)
const Container = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  overflow: hidden;
  position: relative;
  bottom: 8%;
`;
// 이동하는 슬라이드, 여러개의 슬라이드가 연결되어있음
const Slide = styled.div`
  position: absolute;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.$translateX}px);
`;
// 슬라이드 1개의 스타일링
const Page = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  background-color: rgb(236, 227, 232);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${(props) => props.$left}px;
  top: 0;
  overflow: hidden;
  padding: 1rem;
`;
const Btn = styled.button`
  width: 100px;
  height: 300px;
  position: absolute;
  top: 35%;
  background-color: transparent;
  border: none;
  z-index: 100;
  font-size: 5rem;
  color: rgba(226, 182, 201, 0.884);
  cursor: pointer;
`;
const Btn1 = styled(Btn)`
  left: 250px;
  top: 25%;
`;
const Btn2 = styled(Btn)`
  right: 250px;
  top: 25%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Name = styled.h4`
  font-size: 3rem;
`;
const Name2 = styled(Name)`
  margin-bottom: 1rem;
`;
const Intro = styled.span`
  padding: 2.5rem;
  color: black;
  gap: 2rem;
  font-size: 1rem;
  .static {
    line-height: 1.5rem;
    color: black;
    position: static;
  }
`;
const Birth = styled.p`
  color: black;
  font-size: 1.3rem;
  margin: 1rem 0;
`;
export function IntroSlider() {
  const pageList = [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
    Page13,
    Page15,
    Page16,
    Page17,
    Page18,
  ];
  const [slideX, setSlideX] = useState(0);
  const page = useRef(0);
  function handleLeftBtn() {
    if (page.current > 0) {
      setSlideX(slideX + 1);
      page.current = page.current - 1;
    }
  }
  function handleRightBtn() {
    if (page.current < pageList.length - 1) {
      setSlideX(slideX - 1);
      page.current = page.current + 1;
    }
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Slide $translateX={slideX * WIDTH}>
            {pageList.map((Page, i) => (
              <Page key={i} left={WIDTH * i} />
            ))}
          </Slide>
        </Container>
        <Btn1 onClick={handleLeftBtn}>
          <i class="ti ti-chevron-left"></i>
        </Btn1>
        <Btn2 onClick={handleRightBtn}>
          <i class="ti ti-chevron-right"></i>
        </Btn2>
      </Wrapper>
    </>
  );
}

function Page1({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name>헬로키티</Name>
          <Birth className="static">생일 : 11월 1일</Birth>
          <p className="static">
            사과 5개를 쌓은 높이의 키와, 사과 3개 정도의 몸무게가 나가는
            헬로키티는 밝고 상냥한 여자아이예요. 쿠키를 만들고 피아노 치는 것을
            가장 좋아하며, 피아니스트와 시인이 되는 것이 꿈이에요. 특기는 음악과
            영어. 좋아하는 음식은 엄마가 만들어준 애플 파이. 쌍둥이 동생 미미와
            가장 친하답니다.
          </p>
        </Intro>
        <Img src={Hellokitty}></Img>
      </Page>
    </>
  );
}
function Page2({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>미미 화이트</Name2>
          <p className="static">
            매우 여성스럽고, 내성적이고 수줍음이 많은 여자 아이예요. 헬로키티와
            구분할 수 있도록 오른쪽 귀에 리본을 달고 있어요.
          </p>
        </Intro>
        <Img src={Mi}></Img>
      </Page>
    </>
  );
}
function Page3({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>메리 화이트</Name2>
          <p className="static">
            매우 친절한 성격으로 요리, 청소, 세탁을 즐기며 세상에서 가장 맛있는
            애플파이 만들기의 달인이랍니다.
          </p>
        </Intro>
        <Img src={Me}></Img>
      </Page>
    </>
  );
}
function Page4({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>조지 화이트</Name2>
          <p className="static">
            가족들이 의지하는 멋진 아빠예요. 조금 엉뚱하지만 넉살 좋은
            유머감각의 소유자랍니다.
          </p>
        </Intro>
        <Img src={Jo}></Img>
      </Page>
    </>
  );
}
function Page5({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>마가렛 화이트</Name2>
          <p className="static">
            할머니가 만들어 주신 푸딩은 최고~ 흔들의자에 앉아서 자수 놓는 것을
            가장 좋아하세요!
          </p>
        </Intro>
        <Img src={Ma}></Img>
      </Page>
    </>
  );
}
function Page6({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>안소니 화이트</Name2>
          <p className="static">
            취미는 그림 그리기, 만물 박사이신 할아버지는 흥미롭고 재미있는
            옛날이야기를 많이 해 주세요.
          </p>
        </Intro>
        <Img src={An}></Img>
      </Page>
    </>
  );
}
function Page7({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>다니엘 스타</Name2>
          <p className="static">
            헬로키티의 소꿉친구이자 남자친구예요. 작은 것에 감동 받는 순진하고
            센티멘털한 소년이에요.
          </p>
        </Intro>
        <Img src={Da}></Img>
      </Page>
    </>
  );
}
function Page8({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>타이니참</Name2>
          <p className="static">
            아빠가 뉴욕에 출장 가계신 동안, 헬로키티와 살게 됐어요. 남자
            아이지만 헬로키티를 좋아해 리본을 했어요. 헬로키티, 미미와는 친남매
            같이 친하답니다.
          </p>
        </Intro>
        <Img src={Ta}></Img>
      </Page>
    </>
  );
}
function Page9({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>피피</Name2>
          <p className="static">
            수다 떠는 걸 좋아하는 쾌활한 양 친구예요. 조금 어른스러운 면도 있어
            헬로키티의 고민을 잘 들어줘요
          </p>
        </Intro>
        <Img src={Pp}></Img>
      </Page>
    </>
  );
}
function Page10({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>티피</Name2>
          <p className="static">
            힘세고 상냥한 곰 친구예요. 헬로키티의 남자친구 자리를 노리고
            있답니다.
          </p>
        </Intro>
        <Img src={Tp}></Img>
      </Page>
    </>
  );
}
function Page11({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>트래시</Name2>
          <p className="static">
            장난꾸러기 너구리 친구예요. 반에서 가장 에너지가 넘쳐요.
          </p>
        </Intro>
        <Img src={Tr}></Img>
      </Page>
    </>
  );
}
function Page12({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>조디</Name2>
          <p className="static">
            공부를 사랑하는 박식한 강아지 친구예요. 장래희망은 연구자라고
            하네요.
          </p>
        </Intro>
        <Img src={Jd}></Img>
      </Page>
    </>
  );
}
function Page13({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>쥬디</Name2>
          <p className="static">조이의 여자친구</p>
        </Intro>
        <Img src={Ju}></Img>
      </Page>
    </>
  );
}
function Page14({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>조이</Name2>
          <p className="static">
            헬로키티와 가장 친한 쥐 친구예요. 같은 반이라 매일 함께 놀고, 좀
            덜렁대지만 달리기를 아주 잘해요.
          </p>
        </Intro>
        <Img src={Joy}></Img>
      </Page>
    </>
  );
}
function Page15({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>로티</Name2>
          <p className="static">로리의 언니. 노래를 잘해요. 느긋한 성격</p>
        </Intro>
        <Img src={Rt}></Img>
      </Page>
    </>
  );
}
function Page16({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>로리</Name2>
          <p className="static">
            헬로키티에게 숲 속의 비밀을 알려주는 다람쥐 친구예요.
          </p>
        </Intro>
        <Img src={Rr}></Img>
      </Page>
    </>
  );
}
function Page17({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>팀과 타미</Name2>
          <p className="static">모두와 함께 노는 것을 좋아하는 원숭이 남매.</p>
        </Intro>
        <Img src={TT}></Img>
      </Page>
    </>
  );
}
function Page18({ left }) {
  return (
    <>
      <Page $left={left}>
        <Intro>
          <Name2>모리</Name2>
          <p className="static">
            헬로키티의 집에 살고 있는 두더지 친구예요. 수줍음이 많아서 누굴
            만나면 항상 부끄러워 한답니다.
          </p>
        </Intro>
        <Img src={Mr}></Img>
      </Page>
    </>
  );
}
