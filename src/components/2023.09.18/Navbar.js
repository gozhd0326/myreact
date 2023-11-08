import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavItem } from "./NavItem";

const Container = styled.div`
  display: flex;
`;
// 일반 Link로 사용해서 클릭 시 active가 부여되지 않지만 NavLink를 사용할 시 a 태그에 active가 활성화 됨.

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 5px;
  background-color: lightblue;
  &.active {
    background-color: dodgerblue;
    color: white;
  }
`;
export function Navbar() {
  return (
    <>
      <Container>
        {/* link에는 절대경로를 써야됨! 그렇기 때문에 /(루트)를 적용해서 작성해야 됨. */}
        <StyledNavLink to="/home">
          <NavItem icon="ti ti-home-2" name="HOME" />
        </StyledNavLink>
        <StyledNavLink to="/products">
          <NavItem icon="ti ti-building-store" name="SHOP" />
        </StyledNavLink>
        <StyledNavLink to="/dashboard">
          <NavItem icon="ti ti-user" name="MyPage" />
        </StyledNavLink>
        <StyledNavLink to="/login">
          <NavItem icon="ti ti-login" name="Login" />
        </StyledNavLink>
        <StyledNavLink to="/cart">
          <NavItem icon="ti ti-shopping-cart" name="Cart" />
        </StyledNavLink>
      </Container>
      <Outlet />
      {/* outlet이 containier 바깥에 존재해야 됨. */}
    </>
  );
}
