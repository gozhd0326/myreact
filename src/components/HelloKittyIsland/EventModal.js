import { useState } from "react";
import styled from "styled-components";
const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 3.125vw;
  height: 100vh;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 20;
  background-color: rgba(255, 255, 255, 0.2);
`;
const ItemEvent = styled.button`
  position: relative;
  width: 100%;
  height: 50%;
  z-index: 10;
  transition: 0.6s all;
  &hover {
    cursor: pointer;
  }
`;
const EventBox = styled.div`
  position: fixed;
  top: 0;
  width: 534px;
  height: 520px;
  transition: 0.6s all;
  overflow: hidden;
  border-left: 1px solid transparent;
  &.modal {
  }
`;
const ItemSocial = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  transition: 0.6s all;
`;
export function EventModal() {
  return (
    <>
      <Sidebar>
        <ItemEvent>
          <EventBox></EventBox>
        </ItemEvent>
        <ItemSocial></ItemSocial>
      </Sidebar>
    </>
  );
}
