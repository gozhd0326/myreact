// https://tablericons.com에 freeIcon이 많음/
// https://api-ninjas.com 유용한 API가 많이 있음/
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(
    90deg,
    lightblue,
    dodgerblue
  ); //linear-gradient는 background에 속성을 넣어야 함! background-color에 넣으면 안됨~!
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Icon = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-top: 20px;
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding-top: 20px;
  padding-right: 20px;
`;
const Temp = styled.div`
  font-size: 4.5rem;
`;
const City = styled.div`
  font-size: 2.5rem;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`;

export function OpenWeather({ cityName }) {
  const API_KEY = "99e41684a5459a518aa780b4d8034181";
  const API_KEY_NINJA = "D9hGtfn60qNlozi+4JnUAA==jo0mRAeCAJV5VSBP";
  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeater] = useState("");
  console.log("랜더링");
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(geoOK, geoError);
  // }, [temp, city]); //2번째 파라미터에 배열형식으로 의존하는 state를 결정할 수 있음
  // // 누구랑 의존되어 있느냐 배열로 관리하겠다.
  useEffect(() => {
    if (cityName) {
      console.log("SEOUL");
      //props로 받아옴
      // 닌자한테 해당 도시의 위도, 경도를 요청
      const urlToNinja = `https://api.api-ninjas.com/v1/city?name=${cityName}`;
      fetch(urlToNinja, {
        headers: {
          //json을 사용하지 않는다면 여기에 사용하지 않는다고 명시하는 코드르 작성
          "X-Api-Key": API_KEY_NINJA,
        },
      })
        .then((response) => {
          // response를 json parcing 해야하기 때문에 이 then은 무조건 붙는다
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const position = {
            coords: {
              latitude: data[0].latitude,
              longitude: data[0].longitude,
            },
          };
          geoOK(position);
        })
        .catch((error) => {
          geoError(error);
        });
    } else {
      console.log("여기 오지 마~~~~~~");
      // 특정도시 이름을 입력하지 않았으므로 그냥 현재 위치를 요청
      //  현재의 위치정보를 얻기 위해 navigator 객체를 이용
      //getcurrentPosition은 비동기 포지션이기 때문에 동작을 바로 실행하자 못함.
      navigator.geolocation.getCurrentPosition(geoOK, geoError); //브라우저에 현재 포지션을 요청 -> 윈도우에 요청 이것이 성공하면 geoOK의 파라미터로 넣음
    }
    console.log("useEffect");
  }, []); // 최초 로딩시 딱 한번만 실행됨
  //   //hook는 전역변수로 사용할 수 없음. 무조건 컴포넌트 안에 삽입하기

  function geoOK(position) {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // `${중괄호}`(backtic(1옆에))
    fetch(url) //restAPI
      .then((response) => {
        //promise 객체
        //response는 응답을 받는 다는 의미. 이름은 바꿀 수 있음.
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCity(data.name);
        setTemp(parseInt(data.main.temp)); //parseInt는 정수화를 시키는 코드이기 때문에 문자열을 숫자로 바꾸는 것뿐만 아니라 실수(소숫점)을 정수화 시키는데 사용할 수 있음
        setIcon(data.weather[0].icon);
        setWeater(data.weather[0].main);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.", error);
      }); //불러오는 코드 //fetch는 함수, fetch의 return값이 promise 객체임
    //catch는 url에 대한 error
  }
  // catch내용 입력 -> then에 에로우 함수 작성 -> 에로우함수 안에 내용 작성을 해야 오류를 막을 수 있음
  function geoError() {
    alert("현재 위치정보를 찾을 수 없습니다.");
  } //position에 대한 error

  return (
    // return은 뒤에 있는 녀석을 output해줌 return은 같은 라인에 있는 녀석을 return해주기 때문에 다음 줄에 ()하면 안되고 뒤에 무조건 무언가 있어야 함. 뒤에 아무것도 안쓰면 return;과 같이 됨
    <>
      <Container>
        <Card>
          <Icon>
            <Icon>
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
              {/* icon이 날씨에 따라 바뀌어져야 하기 때문에 backtic을 사용! */}
            </Icon>
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
      </Container>{" "}
    </>
  );
}
