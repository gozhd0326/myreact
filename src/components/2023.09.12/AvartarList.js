import styled from "styled-components";
import { Avartar } from "./Avartar";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const persons = [
  { name: "Tom", job: "Student", country: "USA" },
  { name: "Adrian", job: "Engineer", country: "France" },
  { name: "Max", job: "WebDesigner", country: "Germany" },
];

const colors = ["lightgreen", "teal", "khaki"];

export function AvartarList() {
  return (
    <>
      <Container>
        {persons.map((person, i) => (
          <Avartar
            bgcolor={colors[i]} //문자열
            fontcolor="darkslategray"
            person={person}
          />
        ))}
        {/*map은 무조건 중괄호를 써야하지만. 중괄호는 무조건 쓰기 map의 리턴값에 중괄호를 쓸거면 무조건 retrun을 입력하고 그렇지 않으면 return을 입력하지 않아도 됨(암묵적으로 작용) */}
        {/*  */}

        {/* //객체를 사용하기 위해선 person={{}}의 형식을 써야한다.
                // 변수(고정되지 않은 문자열)를 쓸 때 {}중괄호를 사용하기 때문에 {}첫번째 중괄호
                // 두번째 {}중괄호는 변수를 사용하기 위함
              />
            ); //p.title도 코드기 때문에 중괄호{}안에 넣음
           //객체를 사용하기 위해선 person={{}}의 형식을 써야한다.
          // 변수(고정되지 않은 문자열)를 쓸 때 {}중괄호를 사용하기 때문에 {}첫번째 중괄호
          // 두번째 {}중괄호는 변수를 사용하기 위함
        /> */}
        {/* <Avartar
          bgcolor="lightblue" //문자열
          fontcolor="darkblue"
          person={{
            name: "Steve",
            job: "programmer",
            country: "대한민국",
          }} //객체를 사용하기 위해선 person={{}}의 형식을 써야한다.
          // 변수(고정되지 않은 문자열)를 쓸 때 {}중괄호를 사용하기 때문에 {}첫번째 중괄호
          // 두번째 {}중괄호는 변수를 사용하기 위함
        /> */}
        <Avartar
          bgcolor="lightblue" //문자열
          fontcolor="midnightblue"
          person={{
            name: "Steve",
            job: "programmer",
            country: "대한민국",
          }} //객체를 사용하기 위해선 person={{}}의 형식을 써야한다.
          // 변수(고정되지 않은 문자열)를 쓸 때 {}중괄호를 사용하기 때문에 {}첫번째 중괄호
          // 두번째 {}중괄호는 변수를 사용하기 위함
        />
        <Avartar
          bgcolor="lightpink"
          fontcolor="rebeccapurple"
          person={{
            name: "Amy",
            job: "programmer",
            country: "대한민국",
          }}
        />
        <Avartar
          bgcolor="lightgreen"
          fontcolor="green"
          person={{
            name: "Yujin",
            job: "programmer",
            country: "대한민국",
          }}
        />
      </Container>
    </>
  );
}
