import styled from "styled-components";
const StyleButton = styled.button`
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  font-size: 1.3rem;
  line-height: 7px; // 위에 라인을 기준으로 내려감(숫자가 커질수록 아래로 내려감)
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
`;

export function Button({ color, bgcolor, title }) {
  return (
    <>
      <StyleButton color={color} bgcolor={bgcolor}>
        {title}
      </StyleButton>
    </>
  );
}
