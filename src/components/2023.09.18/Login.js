import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GameContext } from "./GameShop";
const Container = styled.div`
  width: 300px;
  background-color: #eee;
  box-shadow: 2px 2px 5px grey;
  padding: 20px;
  border-radius: 20px;
  margin: 50px;
`;
const Header = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  background-color: lightblue;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border: 1px solid blue;
`;
export function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); //UI에 뿌려주는 녀석
  const navigate = useNavigate();
  const { user, setUser } = useContext(GameContext);
  function onSubmit(e) {
    e.preventDefault();
    if (!username || !email) {
      //이름과 이메일을 작성하지 않은 경우, 마이페이지로 보내지 않음!
      return;
    }
    // 마이페이지로 보냄
    navigate("/dashboard"); //유저정보를 부모가 관리하도록 setter를 호출함
    //후크
    setUser({ name: username, email: email });
    //객체로 저장하는 습관이 좋은 습관임
  }
  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Header>Login</Header>
          <div>
            <label>Ueser Name</label>
            <br />
            <input
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Ueser Email</label>
            <br />
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit">제출</Button>
        </form>
      </Container>
    </>
  );
}
