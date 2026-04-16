import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const NavBar = styled.nav`
  width: 280px;
  background-color: ${({ theme }) => theme["gray-800"]};
`;

export const Main = styled.main`
  flex: 1;
  padding: 40px;
  background-color: ${({ theme }) => theme["gray-50"]};
`;
