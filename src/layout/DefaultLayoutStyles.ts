import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.black};

  @media (max-width: 1320px) {
    flex-flow: column wrap;
  }
`;

export const NavBar = styled.nav`
  width: 264px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.black};
  border-right: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 1320px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    min-height: 80px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    z-index: 1000;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  padding: 40px;
  background-color: ${({ theme }) => theme["gray-50"]};
  background-image: radial-gradient(circle at 92% 4%, rgba(16, 185, 129, 0.06), transparent 30%);
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  overflow-y: auto;

  @media (max-width: 1320px) {
    width: 100%;
    margin-top: 140px;
    border-radius: 0;
  }

  @media (max-width: 750px) {
    padding: 20px;
  }
`;
