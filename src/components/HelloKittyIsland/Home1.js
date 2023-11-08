import { Main1 } from "./Main1";
import { Composition } from "./Composition3";
import { Information } from "./Information4";
import { Events } from "./Events5";
import { EventModal } from "./EventModal";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { ScrollBtn } from "./ScrollBtn";
import { GuideMap } from "./GuideMap6";
import { Introduce } from "./Introduce2";
import { IntroSlider, SlideBox } from "./IntroSlider";

const Container = styled.div``;
export function Home1() {
  return (
    <>
      <Container>
        <EventModal></EventModal>
        <Main1>
          <Sidebar></Sidebar>
          <ScrollBtn></ScrollBtn>
        </Main1>
        <Introduce>
          <Sidebar></Sidebar>
          <ScrollBtn></ScrollBtn>
        </Introduce>
        {/* <IntroSlider id="slide"></IntroSlider> */}
        <Composition>
          <Sidebar></Sidebar>
          <ScrollBtn></ScrollBtn>
        </Composition>
        <Information>
          <Sidebar></Sidebar>
          <ScrollBtn></ScrollBtn>
        </Information>
        <Events>
          <Sidebar></Sidebar>
          <ScrollBtn></ScrollBtn>
        </Events>
        <GuideMap>
          <Sidebar></Sidebar>
          <ScrollBtn></ScrollBtn>
        </GuideMap>
      </Container>
    </>
  );
}
