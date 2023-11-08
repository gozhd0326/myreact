import styled from "styled-components";
import "./Session1.css";

const Bigbox1 = styled.div`
  text-align: center;
  color: blue;
  font-size: 2.5rem;
  font-weight: bold;
`;
const Bigbox2 = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 40%;
  margin-top: 20px;
  .b1 img {
    width: 100%;
    margin-top: 15px;
  }
  .b2 {
    font-size: 1.5rem;
    padding: 15px;
  }
`;
const Bigbox3 = styled.div`
  width: 80%;
  height: 150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 50px;
  .img {
    width: 100%;
  }
  .p {
    font-size: 0.5rem;
    padding: 5px;
  }
`;

export function Session1() {
  return (
    <>
      <Bigbox1>Hello world</Bigbox1>
      <Bigbox2>
        <div className="b1">
          <img src="https://picsum.photos/id/35/300/200" />
        </div>
        <p className="b2 bbb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
          iaculis felis. Nulla nec lectus id arcu tristique fermentum.
          Pellentesque pretium quam vitae nisl lobortis lacinia. Aliquam aliquam
          ligula et arcu ullamcorper imperdiet.
        </p>
      </Bigbox2>
      <Bigbox3>
        <div className="smallbox1">
          <div>
            <img src="https://picsum.photos/id/17/300/200" />
          </div>
          <p>
            Fusce vitae commodo est, vel faucibus sem. Nullam rutrum viverra
            justo, eget bibendum ligula tincidunt at.
          </p>
        </div>
        <div className="smallbox2">
          <div>
            <img src="https://picsum.photos/id/18/300/200" />
          </div>
          <p>
            Vivamus auctor eleifend venenatis. Aenean vulputate, nisi nec
            hendrerit pellentesque, ante magna fermentum sapien, a mattis tortor
            dui vel urna.
          </p>
        </div>
        <div className="smallbox3">
          <div>
            <img src="https://picsum.photos/id/25/300/200" />
          </div>
          <p>Ut nec neque nec ligula porttitor malesuada.</p>
        </div>
      </Bigbox3>
    </>
  );
}
