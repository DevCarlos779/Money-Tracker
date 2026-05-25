import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 1320px) {
    flex-flow: column wrap;
  }
`;

export const NavBar = styled.nav`
  width: 280px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme["gray-800"]};

  @media (max-width: 1320px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    min-height: 80px;

    z-index: 1000;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  padding: 40px;
  background-color: ${({ theme }) => theme["gray-50"]};
  overflow-y: auto;

  @media (max-width: 1320px) {
    width: 100%;
    margin-top: 140px;
  }
`;
