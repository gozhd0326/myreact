// gru - master (imgru.com(유명한사람들을 모아놓은 사이트))
// const 입력 가능

import styled from "styled-components"; //styled components 사용 가능하게 됨

const Container = styled.div`
  //Container를 대문자로 입력한 이유가 소문자는 태그로 인식하기 때문임. 리액트 컴포넌트라고 생각하면 됨
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`; //styled는 내가 사용하려는 모든 태그가 포함됨 //div는 내가 만들려는 태그 이름 //`` 백틱 사이에는 내가 사용하려는 css문법을 입력

const Title = styled.h1`
  font-size: 2.5rem;
  color: black;
  text-shadow: 2px 3px 2px gray;
`;

const Titlegray = styled(Title)`
  color: gray;
  text-shadow: 2px 3px 3px black;
`;

const Image = styled.img`
  //스타일링한 태그를 어떤 태그로 사용할지가 중요하기 때문에 잘 선택해야된다.(본래 img 태그나 a 태그 button 태그 였던 것을 div등의 아무런 기능이 없는 태그를 사용할 시 본래 사용하던 태그의 기능들이 사라지기 때문)
  border-radius: 50%;
`;
export function List() {
  // const 입력 가능
  const products = [
    { title: "Banana" },
    { title: "Apple" },
    { title: "Grape" },
  ];
  const user = {
    name: "Hedy Larmarr",
    imageUrl: "https://i.imgur.com/WoYseF3.jpeg",
    imageSize: 90,
  };
  return (
    <>
      <Titlegray>List component</Titlegray>
      <p>React practice code</p>
      <ul>
        {
          products.map((p) => {
            return <li>{p.title}</li>; //p.title도 코드기 때문에 중괄호{}안에 넣음
          })
          // products.map((p)=>
          // <li>{p.title}</li> //p.title도 코드기 때문에 중괄호{}안에 넣음
          // ) //return을 생략하고 작성 가능
        }
      </ul>
      <Container>
        <Title>{user.name}</Title>
        <Image src={user.imageUrl} />
      </Container>
    </>
  );
}
