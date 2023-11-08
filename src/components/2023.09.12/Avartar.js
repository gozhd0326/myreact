import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  background-color: ${(props) => props.bgcolor};
  box-shadow: 1px 2px 5px gray;
  padding: 10px;
  margin-bottom: 20px;
`;

const Bold = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.fontcolor};
`;

// export function Avartar(props) {
export function Avartar({
  bgcolor,
  fontcolor,
  person: { name, job, country },
}) {
  return (
    <>
      {/* <Container bgcolor={props.bgcolor}>
        <div>
          <Bold>{props.person.name}</Bold>
          <p>Job :{props.person.job}</p>
          <p>Country : {props.person.country}</p> */}
      <Container bgcolor={bgcolor}>
        {/* container는 styledconponents, props(변수)의 bgcolor라는 parameter를 받아서 props의 bgcolor를 받아 사용. */}
        <div>
          <Bold fontcolor={fontcolor}>{name}</Bold>
          <p>Job :{job}</p>
          <p>Country : {country}</p>
          <hr />
        </div>
      </Container>
    </>
  );
} //컴포넌트는 반드시 대문자로 작성!!

//AvatarList 컴포넌트를 이 곳에 한번에 작성해서 App에서 불러와도 무방함.

//export function AvartarList() {
// return (
//     <>
//       <Container>
//         <Avartar
//           bgcolor="lightblue" //문자열
//           fontcolor="darkblue"
//           person={{
//             name: "Steve",
//             job: "programmer",
//             country: "대한민국",
//           }} //객체를 사용하기 위해선 person={{}}의 형식을 써야한다.
//           // 변수(고정되지 않은 문자열)를 쓸 때 {}중괄호를 사용하기 때문에 {}첫번째 중괄호
//           // 두번째 {}중괄호는 변수를 사용하기 위함
//         />
//         <Avartar
//           bgcolor="lightpink"
//           fontcolor="rebeccapurple"
//           person={{
//             name: "Amy",
//             job: "programmer",
//             country: "대한민국",
//           }}
//         />
//         <Avartar
//           bgcolor="lightgreen"
//           fontcolor="green"
//           person={{
//             name: "Yujin",
//             job: "programmer",
//             country: "대한민국",
//           }}
//         />
//       </Container>
//     </>
//   );
// }
