import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 180px;
  background-color: khaki;
  position: absolute;
  top: 500px;
  left: 1600px;
  transition: all 0.5s ease;
  &.modal {
    /*    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 는 absolute를 사용했을 때 화면 정중앙에 놓게하는 기능  */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 650px;
    padding: 5px;
  }
`;
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  /* f=255 ,#fff = 255,255,255 = white */
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  margin: 10px 0;
  padding: 0 10px;
  transition: all 1s linear;
  opacity: 0;
  &.visible {
    opacity: 1;
  }
`;
function ModalBox() {
  const [isModal, setIsModal] = useState(false);
  const [modal, setModal] = useState("");
  const [visible, setVisible] = useState("");
  function onClick() {
    if (isModal) {
      setIsModal(false); //Modal을 끄는 기능(true =  모달 , false = 모달 끔)
      setModal(""); //("") 클래스를 없애는 기능
      setVisible(""); //클래스를 없애는 기능
    } else {
      setIsModal(true);
      setModal("modal");
      setTimeout(() => {
        setVisible("visible"); //모달창이 열릴 때 글씨가 삐져나오지 않도록 하는 코드
      }, 500); //500 = 0.5초 (ms)
    }
  }
  return (
    <>
      {/*<Backdrop onClick={onClick} />은 백그라운드를 눌러도 모달 창이 닫히게끔 하는 기능  */}
      {isModal ? <Backdrop onClick={onClick} /> : null}
      <Box onClick={onClick} className={modal}>
        <Img src="https://picsum.photos/id/127/300/200" />
        {isModal ? (
          <>
            <Text className={visible}>
              <h2>사진제목</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                molestie vitae tortor et ullamcorper. Suspendisse vehicula
                luctus condimentum. Integer non purus in turpis viverra
                tincidunt. Nullam blandit, lorem ut blandit eleifend, felis nisi
                feugiat lacus, finibus consequat lacus diam eu mauris
              </p>
            </Text>
          </>
        ) : null}
      </Box>
    </>
  );
}

export function Modal() {
  return (
    <>
      <ModalBox />
    </>
  );
}
